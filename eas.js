

function createRow(numberOfElements){
    const row = document.createElement("div");
    row.className = "row";
    for(let i = 1; i <= numberOfElements; i ++){
        const square = document.createElement("div");
        square.className = "square";
        row.appendChild(square)

    }
    //console.info(row);
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
    return grid
}