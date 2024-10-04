const displayGrid = document.querySelector("#displayGrid");
createGrid(16);


const button = document.querySelector('button');

button.addEventListener("click", () => {
    let gridSize = prompt("Enter the size of the grid between 1 and 100");
    console.info ("gridSize = " + gridSize);
    if (gridSize > 0 && gridSize < 101){
        displayGrid.removeChild(displayGrid.firstChild);
        displayGrid.appendChild(createGrid(gridSize));
    }

})

function createRow(numberOfElements){
    const row = document.createElement("div");
    row.className = "row";
    for(let i = 1; i <= numberOfElements; i ++){
        const square = document.createElement("div");
        square.className = "square";
        row.appendChild(square)
    }
    return row;
}

function createGrid(numberOfRows){
    rowLength = numberOfRows;
    const grid = document.createElement("div");
    grid.className = "grid"
    for(let i = 1; i <= numberOfRows; i++){
        const gridRow = createRow(rowLength);
        grid.appendChild (gridRow);
    }
    displayGrid.appendChild(grid);
    const colorSquare = document.querySelectorAll(".square");
    colorSquare.forEach((item) =>
        item.addEventListener("mouseover", () => item.className = "colored")
    )
}









