let tempC = 26
let currentUnit ="C"
let condition = "cloudy"

function updateUI(){
    let temp = tempC
    if (currentUnit === "F") {
        temp = (tempC * 9/5) + 32
    }
    document.getElementById("tempValue").innerText = Math.round(temp)

    const img = document.getElementById("bgImage")
    const text = document.getElementById("WeatherText")

    if(condition == "rainy") {
        img.src = "assets/rainy (1).png"
        text.innerText = "it's rainy today"
    } else {
        img.src = "assets/cloudy (1).png"
        text.innerText = "it's rainy today"
    }
}

function setUnit(unit){
    currentUnit = unit
    updateUI()
}

function changeWeather() {
    condition = condition === "cloudy" ? "rainy" : "cloudy"
    updateUI()
}

updateUI()