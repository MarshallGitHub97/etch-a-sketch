
const container = document.querySelector(".container");
let gridSize = 16;

for(let i = 0; i < gridSize * gridSize; i++){
    const newDiv = document.createElement("div");
    newDiv.classList = "squareDiv";
    container.appendChild(newDiv);
}

document.querySelector("button").addEventListener("click", () => {
    gridSize = prompt("What Grid Size do you want to Choose ?");
    gridSize = Number(gridSize);

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < gridSize*gridSize; i++){
    const newDiv = document.createElement("div");
    newDiv.classList = "squareDiv";
    let newWidth = 100 / gridSize ; 
    newDiv.style.width = newWidth + "%";
    container.appendChild(newDiv);
}
})