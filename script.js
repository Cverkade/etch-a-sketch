let gridContainer = document.getElementById("container")
let slider = document.getElementById("gridSlider")
let brush = document.getElementById("brush")
let brushText = document.getElementById("brushText")
let gridSize = document.getElementById("gridSize")
let colorInput = document.getElementById("color")
let randomColorSelect = document.getElementById("random")
let rainbowButton = document.getElementById("rainbow")
let oneColour = document.getElementById("oneColour")
let gridButton = document.getElementById("toggleGridlines")
let userChoice = document.getElementsByClassName("selection")
let clearButton = document.getElementById("clear")
let toggleClick = document.getElementById("toggleClick")
let fillRainbow = document.getElementById("fillRainbow")
let fillColour = document.getElementById("fillColour")
let color = "#FFD700";
let border = false;
let mouseDown = false
let currentSelection = ''
let currentMethod = "mouseover"
let brushSize = 1;

onload = createGrid(16)


Array.from(userChoice).forEach(selection => selection.addEventListener("click", function () {
    Array.from(userChoice).forEach(selection => selection.classList.remove("active"))
    if (selection.classList.contains('choice'))
        selection.classList.add("active")
    currentSelection = selection.id
}))

toggleClick.addEventListener("click", function () {
    let cells = document.querySelectorAll(".cell")
    if (currentMethod == "click") {
        cells.forEach(cell => cell.removeEventListener("click", changeColour))
        cells.forEach(cell => cell.addEventListener("mouseover", changeColour))
        currentMethod = "mousover"
    } else {
        cells.forEach(cell => cell.removeEventListener("mouseover", changeColour))
        cells.forEach(cell => cell.addEventListener("click", changeColour))
        currentMethod = "click"
    }
})

slider.oninput = function () {
    gridContainer.innerHTML = ''
    gridSize.innerHTML = this.value + ' x ' + this.value;
    createGrid(this.value)
}

brush.oninput = function () {
    brushSize = this.value
    brushText.innerHTML = this.value + ' x ' + this.value;
}


function createGrid(size) {
    gridWidth = 100 / size;
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fit,' + gridWidth + '%)'
    let count = 01
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const grid = document.createElement("div")
            grid.id = count
            grid.className = "cell"
            gridContainer.appendChild(grid)
            count++;
        }
    }

    if (gridButton.checked)
        gridButton.click();
    if (toggleClick.checked)
        toggleClick.click()

    let cells = document.querySelectorAll(".cell")
    cells.forEach(cell => cell.addEventListener("mouseover", changeColour))
}

function changeColour(e) {
    let cellID = parseInt(e.target.id)
    let sliderNumber = parseInt(slider.value)

    if (brushSize == 3) {
        if (currentSelection == "rainbow") {
            if (cellID <= sliderNumber) {
                if (cellID != sliderNumber) {
                    document.getElementById(cellID + sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                if (cellID != 1) {
                    document.getElementById(cellID + sliderNumber - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
            } else if (cellID == sliderNumber + 1) {
                document.getElementById(cellID + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.getElementById(cellID - sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.getElementById(cellID + sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            } else if (cellID >= (sliderNumber * sliderNumber) - (sliderNumber - 1)) {

                document.getElementById(cellID - sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                if (cellID != (sliderNumber * sliderNumber)) {
                    document.getElementById(cellID + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                if (cellID != (sliderNumber * sliderNumber) - (sliderNumber - 1)) {
                    document.getElementById(cellID - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID - sliderNumber - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

                }
            } else {
                if (cellID % sliderNumber != 0) {
                    document.getElementById(cellID + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                } if (cellID % sliderNumber != 1) {
                    document.getElementById(cellID - sliderNumber - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    document.getElementById(cellID + sliderNumber - 1).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                document.getElementById(cellID - sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.getElementById(cellID + sliderNumber).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
            e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } else {
            if (cellID <= sliderNumber) {
                if (cellID != sliderNumber) {
                    document.getElementById(cellID + sliderNumber).style.backgroundColor = color
                    document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = color
                    document.getElementById(cellID + 1).style.backgroundColor = color
                }
                if (cellID != 1) {
                    document.getElementById(cellID + sliderNumber - 1).style.backgroundColor = color
                    document.getElementById(cellID - 1).style.backgroundColor = color
                }
            } else if (cellID == sliderNumber + 1) {
                document.getElementById(cellID + 1).style.backgroundColor = color
                document.getElementById(cellID - sliderNumber).style.backgroundColor = color
                document.getElementById(cellID + sliderNumber).style.backgroundColor = color
                document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = color
                document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = color
            } else if (cellID >= (sliderNumber * sliderNumber) - (sliderNumber - 1)) {

                document.getElementById(cellID - sliderNumber).style.backgroundColor = color
                if (cellID != (sliderNumber * sliderNumber)) {
                    document.getElementById(cellID + 1).style.backgroundColor = color
                    document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = color
                }
                if (cellID != (sliderNumber * sliderNumber) - (sliderNumber - 1)) {
                    document.getElementById(cellID - 1).style.backgroundColor = color
                    document.getElementById(cellID - sliderNumber - 1).style.backgroundColor = color

                }
            } else {
                if (cellID % sliderNumber != 0) {
                    document.getElementById(cellID + 1).style.backgroundColor = color
                    document.getElementById(cellID + sliderNumber + 1).style.backgroundColor = color
                    document.getElementById(cellID - sliderNumber + 1).style.backgroundColor = color
                } if (cellID % sliderNumber != 1) {
                    document.getElementById(cellID - sliderNumber - 1).style.backgroundColor = color
                    document.getElementById(cellID - 1).style.backgroundColor = color
                    document.getElementById(cellID + sliderNumber - 1).style.backgroundColor = color
                }
                document.getElementById(cellID - sliderNumber).style.backgroundColor = color
                document.getElementById(cellID + sliderNumber).style.backgroundColor = color
            }
            e.target.style.backgroundColor = color
        }
    } else {
        if (currentSelection == "rainbow") {
            e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } else {
            e.target.style.backgroundColor = color
        }
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

//Selects a random colour when button is pressed
randomColorSelect.addEventListener("click", function () {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorInput.value = color;
})

//Changes colour and displays it when changing colour
colorInput.addEventListener("change", function () {
    rainbowButton.classList.remove("active")
    oneColour.classList.add("active")
    currentSelection = "oneColour"
    color = event.target.value;
});

//Clears grid
clearButton.addEventListener("click", function () {
    gridContainer.innerHTML = ''
    createGrid(slider.value)
})


fillRainbow.addEventListener("click", function () {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    })
})

fillColour.addEventListener("click", function () {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.style.backgroundColor = colorInput.value;
    })
})