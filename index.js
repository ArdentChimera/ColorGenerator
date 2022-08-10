let newColor = ""
let selectedScheme = ""

const getColorScheme = document.getElementById("get-btn")
const colorOne = document.getElementById("colorOne")
const colorTwo = document.getElementById("colorTwo")
const colorThree = document.getElementById("colorThree")
const colorFour = document.getElementById("colorFour")
const colorFive = document.getElementById("colorFive")
const hexValueOne = document.getElementById("colorOneValue")
const hexValueTwo = document.getElementById("colorTwoValue")
const hexValueThree = document.getElementById("colorThreeValue")
const hexValueFour = document.getElementById("colorFourValue")
const hexValueFive = document.getElementById("colorFiveValue")

const schemeSelector = document.getElementById("colorScheme")
schemeSelector.addEventListener("change", (c) => {
    selectedScheme = c.target.value
})

const pickedColor = document.getElementById("colorPicker")
pickedColor.addEventListener("change", (e) => {
    newColor = e.target.value
})

getColorScheme.addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${newColor.substring(1)}&mode=${selectedScheme.toLocaleLowerCase()}&count=5`)
        .then(res => res.json())
        .then(newScheme => {
            let color = [];
            for(let i in newScheme.colors){
                color.push(newScheme.colors[i].hex.value)
            }
            colorOne.style.background = `${color[0]}`
            colorTwo.style.background = `${color[1]}`
            colorThree.style.background = `${color[2]}`
            colorFour.style.background = `${color[3]}`
            colorFive.style.background = `${color[4]}`
            hexValueOne.textContent = `${color[0]}`
            hexValueTwo.textContent = `${color[1]}`
            hexValueThree.textContent = `${color[2]}`
            hexValueFour.textContent = `${color[3]}`
            hexValueFive.textContent = `${color[4]}`
        })
})