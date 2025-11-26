const heading = document.getElementById("heading");
heading.textContent = "Welcome to the DOM World!";

const paragraph = document.getElementsByTagName("p");
for (let p of paragraph){
    p.style.color = "blue";
}

const containerDiv = document.querySelector("div.container");
if(containerDiv){
    containerDiv.style.backgroundColor = "yellow";
}
