const body = document.querySelector("body");
const greenButton = document.getElementsByTagName("button")[0];
const redButton = document.getElementsByTagName("button")[1];
const blueButton = document.getElementsByTagName("button")[2];
const randomButton = document.getElementsByTagName("button")[3];


body.style.backgroundColor = "pink";

const setColor = function(name) {
    body.style.backgroundColor = name;
}

greenButton.addEventListener("click", function () {
    setColor("green");
});

redButton.addEventListener("click", function () {
    setColor("red");
});

blueButton.addEventListener("click", function() {
    setColor("blue");
});

const randomColor = function () {
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const random = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = random;
};

randomButton.addEventListener("click", function() {
    randomColor ();
    
});

