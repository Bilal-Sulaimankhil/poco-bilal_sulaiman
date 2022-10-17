let container = document.getElementsByClassName("images");

// let names = ["abdul", "sevem", "ibo"]

// let ages = [20, 30, 40,]

let people = [
    {name: "Aabdul", age: 20 , image_url :"./abdul.jpg"},
    {name: "sevem", age: 30 , image_url :"./sevem.jpg"},
    {name: "ibo", age: 40 , image_url :"./ibo.jpg"},
]

let str = "";

for (let i = 0; i < people.length; i++) {

    let person = people[i];
    // str += "<li>" ;
    // str += `${i+1} ${person.name} ( age ${person.age} ) </li>`
    str +=`<div class=""><img src="${person.image_url}" alt=""> <P>${person.name} <br> Age ${person.age} <br></P></div>`
}

container.innerHTML = str;
 