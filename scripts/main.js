const myImage = document.querySelector("img");

myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/girotia.png") {
        myImage.setAttribute("src", "images/girotia_haven.png");
        myImage.setAttribute("alt", "WIP map of Girotia with the Quarry Hole and city hall, and the Haven Collective buildings highlighted.");
    } else {
        myImage.setAttribute("src", "images/girotia.png");
        myImage.setAttribute("alt", "WIP map of Girotia with the Quarry Hole and city hall buildings highlighted.");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Welcome! Please enter your name!");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Orsudei, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back to Orsudei, ${storedName}`;
};
myButton.onclick = function () {
    setUserName();
};
