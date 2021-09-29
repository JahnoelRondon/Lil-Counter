// ------------------ CACHED ELEMENTS
const bodyEl = document.querySelector("body");

const countEl = document.querySelector("h1");

const minusEl = document.querySelector("#minusEl");
const inputEl = document.querySelector("input");
const plusEl = document.querySelector("#plusEl");

const resetBtn = document.querySelector("#resetBtn")
const modeEl = document.querySelector("#modeBtn");

const divisibleEl = document.querySelector("h2");

const buttonsEls = document.querySelectorAll("button");

// variables
let currentValue = 0;
let currentMode = "";

// -------------- INITIAL RENDER
initRender();

function initRender(){
    if(currentMode != "Dark Mode"){
        console.log("initially render light mode");
        currentMode = "Light Mode"
        modeEl.textContent = "Dark Mode";
        renderLightMode();
    } else {
        currentMode = "Dark Mode"
        modeEl.textContent = "Light Mode";
        renderDarkMode();
    }
}


// ----Events
minusEl.addEventListener("click", calculate);
plusEl.addEventListener("click", calculate);

resetBtn.addEventListener("click", function(){
    currentValue = 0;
    countEl.style.color = "black";
    countEl.textContent = currentValue;
})

modeEl.addEventListener("click", reRenderStyle);

// ---------------- FUNCTIONS
function calculate(event){

    if(this.id === "plusEl"){
        currentValue += parseInt(inputEl.value);
        countEl.textContent = currentValue;

        countEl.style.color = currentValue < 0 ? "red" : currentValue > 0 ? "lime" : "black";
    }

    if(this.id === "minusEl"){
        currentValue -= parseInt(inputEl.value);
        countEl.textContent = currentValue;

        countEl.style.color = currentValue < 0 ? "red" : currentValue > 0 ? "lime" : "black";
    }

    // function to check divisibility
    checkDivisibility()

}

function checkDivisibility(){

    if(currentValue % 3 === 0 && currentValue % 5 === 0){
        divisibleEl.textContent = "FizzBuzz";
    } else if(currentValue % 3 === 0){
        divisibleEl.textContent = "Fizz";
    } else if(currentValue % 5 === 0){
        divisibleEl.textContent = "buzz";
    } else {
        divisibleEl.textContent = "";
    }
}

function reRenderStyle(){
    // changes the text content of the btn as well
    if(currentMode === "Light Mode"){
        renderDarkMode();
    } else if(currentMode === "Dark Mode"){
        renderLightMode();
    }
}

function renderLightMode(){
    currentMode = "Light Mode";
    bodyEl.className = "lightBody";

    buttonsEls.forEach(function(btn){
        btn.className = "lightBtns";
    })

    inputEl.className = "lightBtns";
    modeEl.textContent = "Dark Mode";

}

function renderDarkMode(){
    currentMode = "Dark Mode";
    bodyEl.className = "#darkBody";

    buttonsEls.forEach(function(btn){
        btn.className = "darkBtns";
    })

    inputEl.className = "darkBtns";
    modeEl.textContent = "Light Mode";

}