const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 10,
  isFriendly: true,
  name: "Benny",
};

// 1. Select the pet detail dom element by class

const petDetail = document.querySelector(".pet-detail");

// 3. play with friendly value

const isPetFriendly = pet.isFriendly ? "yes" : "no";

// 4.  check pet is friendly or not

console.log(isPetFriendly);

// 5. use the colour in a variable

const petColor = pet.colour;

// 2. change the innerHTML of the pet details

const petType = pet.type;
const petAge =
  pet.age > 0 ? pet.age : "Information about age is not available at this time";
const petName = pet.name;

petDetail.innerHTML = `<div>
<h4 style="color: ${petColor}">Type of pet: ${petType}</h4>
<p>Name: ${petName}
<p>Age: ${petAge}</p>
<p>Friendly: ${isPetFriendly}</p>
</div
`;

const selectPet = document.querySelector(".pet-detail div");
selectPet.classList.add("pet");
