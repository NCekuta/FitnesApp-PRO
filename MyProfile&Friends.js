//Add friends
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    
    users.forEach(user => {
      const isMatch = user.name.toLowerCase().includes(value); 
      if (value === null || value.trim() === "") {
        user.element.classList.add("hide");
      } else {
        if (isMatch) {
          user.element.classList.remove("hide");
        } else {
          user.element.classList.add("hide");
        }
      }
    });
  });
  

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      header.textContent = user.name
      userCardContainer.append(card)
      return { name: user.name, element: card }
    })
  })


//my profile
const btnAddFriends = document.getElementById("btnAddFrineds");
btnAddFriends.addEventListener('click', () => {
    window.location.href = 'AddFriends.html';
});