let gridContainer = document.getElementById("container")
let sizeButton = document.getElementById("gridSize")
let colorInput = document.getElementById("color")
let randomColorSelect = document.getElementById("random")
let color = "#FFD700";

sizeButton.addEventListener("click", function () {
    clearGrid();
    let size = prompt("Enter the square grid size", "0")
    if (size < 100)
        createGrid(size)
})

function createGrid(size) {
    gridWidth = 100 / size;
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fit,' + gridWidth + '%)'
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const grid = document.createElement("div")
            grid.className = 'cell'
            gridContainer.appendChild(grid)
        }
    }
    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            console.log(color)
            cell.style.backgroundColor = color
        })
    })
}

randomColorSelect.addEventListener("click", function () {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorInput.value = color;
})

function clearGrid() {
    gridContainer.innerHTML = ''
}

colorInput.addEventListener("change", function () {
    color = event.target.value;
});
