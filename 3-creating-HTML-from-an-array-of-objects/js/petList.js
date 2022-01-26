const pets = [
  {
    type: null,
    colour: "brown",
    age: 10,
    friendly: true,
  },
  {
    colour: "orange",
    age: 7,
    friendly: false,
  },
  {
    type: "duck",
    colour: "#00ff00",
    age: 20,
    friendly: false,
  },
];
// Select the pet-container class

const petContainer = document.querySelector(".pet-container");

// Create a html variable to hold our htm in it when we use the loop

let html = "";

// Loop over the array

for (let i = 0; i < pets.length; i++) {
  let petType = pets[i].type ? pets[i].type : "Missing information";
  let petColour = pets[i].colour;
  let petFriendly = pets[i].friendly ? "Yes" : "No";

  html += `<div class="pet">
    <h4>Type of pet: ${petType}</h4>
    <p>Color of pet: ${petColour}</p>
    <p>Age of pet: ${pets[i].age}</p>
    <p>Is the pet friendly: ${petFriendly}</p>
    </div>
    `;
}

// change the innerHTML

petContainer.innerHTML = html;
