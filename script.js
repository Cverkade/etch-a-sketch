let gridContainer = document.getElementById("container")
let slider = document.getElementById("slider")
let gridSize = document.getElementById("gridSize")
let colorInput = document.getElementById("color")
let randomColorSelect = document.getElementById("random")
let gridButton = document.getElementById("toggleGridlines")
let userChoice = document.getElementsByClassName("selection")
let color = "#FFD700";
let border = false;
let mouseDown = false
let currentSelection = ''

onload = createGrid(16)


Array.from(userChoice).forEach(selection => selection.addEventListener("click", function () {
    Array.from(userChoice).forEach(selection => selection.classList.remove("active"))
    selection.classList.add("active")
    currentSelection = selection.id
}))


slider.oninput = function () {
    gridContainer.innerHTML = ''
    gridSize.innerHTML = this.value + ' x ' + this.value;
    createGrid(this.value)
}

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
    cells.forEach(cell => cell.addEventListener("mouseover", changeColour))
}

function changeColour(e) {
    if (currentSelection == "rainbow") {
        e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    } else {
        e.target.style.backgroundColor = color
    }
}

gridButton.addEventListener("click", toggleGridLines)

//Changes border to add or remove gridlines
function toggleGridLines() {
    let cells = document.querySelectorAll(".cell")
    if (border == true) {
        cells.forEach((cell) => {
            cell.style.border = "none"
            border = false
        })
    } else {
        cells.forEach((cell) => {
            cell.style.border = "0.5px rgb(101, 101, 101) solid"
            border = true
        })
    }
}
randomColorSelect.addEventListener("click", function () {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorInput.value = color;
})

colorInput.addEventListener("change", function () {
    color = event.target.value;
});
