const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 10,
    isFriendly: true,
    name: "Benny",
};

// 1.select header h4

const header = document.querySelector("h4");

// 2.select the .age class

const age = document.querySelector(".age");

// 3.select .friendly class

const friendly = document.querySelector(".friendly");

// 4.change the innerHTML of each of them with data from the object

let friendly2;

/*if (pet.isFriendly) {
    friendly2 = "This pet is friendly"
} else {
    friendly2 = "This pet is not friendly"
}*/

// Ternary operator

friendly2 = pet.isFriendly ? "This pet is friendly" : "This pet is not friendly"

console.log(friendly2)

header.innerHTML = pet.type;
age.innerHTML = pet.age;
friendly.innerHTML = pet.isFriendly ? "this pet is friendly" : "this pet is not friendly";