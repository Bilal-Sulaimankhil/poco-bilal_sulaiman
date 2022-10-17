// const card = document.querySelector(".card")

// card.addEventListener("click" , () => {
//     card.classList.add("card");
// });

let mates = ['abdul', 'Ibrahim', 'sevem']
let images = ['abdul.jpg', 'ibo.jpg', 'sevem.jpg']
let counter = 0
function changePerson (array) {
    counter += 1
    document.getElementById("span").innerText=mates[counter];
    document.getElementById('img').src= images[counter];
}