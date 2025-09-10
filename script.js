
const container = document.querySelector(".container");

for(let i = 0; i < 16*16; i++){
    const newDiv = document.createElement("div");
    newDiv.classList = "squareDiv";
    container.appendChild(newDiv);
}
