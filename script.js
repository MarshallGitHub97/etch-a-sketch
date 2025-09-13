const DEFAULT_GRID_SIZE = 16;

const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-all")
const sizeValue = document.querySelector(".grid-size")

clearBtn.onclick = () => {
        document.querySelectorAll(".squareDiv").forEach((div) => {
        div.style.background = clearAllColor();
    });
};
sizeValue.oninput = (e) => setGridSize(e.target.value);

setGridSize(DEFAULT_GRID_SIZE);

function setGridSize(gridSize){

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild); 
    }

    for(let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "squareDiv";
        let newWidth = 100 / gridSize ; 
        newDiv.style.width = newWidth + "%";

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.background = setRandomRGBColor();
        });

        container.appendChild(newDiv);
    }
};

function setRandomRGBColor() {
    let randomRed = Math.floor(Math.random() * 255);
    let randomBlue =  Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`
}

function clearAllColor() {
    let randomRed = 255;
    let randomBlue =  255;
    let randomGreen = 255;
    return `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`
}