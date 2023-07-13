const idselect = document.getElementById("container");
const queryselect = document.querySelector("#container");
const allelements = document.getElementsByClassName("second");
const thirdOl = document.querySelector("ol .third");
idselect.innerText = "Hello!";
const footer = getElementsByClassName("footer");
footer.classList.add("main");
footer.classList.remove("main");
let li = document.createElement("li");
li.innerText = "four"
let list = document.querySelector("ul");
list.appendChild(li);
let lis = document.querySelectorAll("ol li");
for (let li of lis){
    li.style.backgroundColor = "green";
}
footer.remove();
