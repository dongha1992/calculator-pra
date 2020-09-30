const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const dot = document.querySelector(".dot")
const showCurrentNumber = document.querySelector(".current-value")
const showPreviousNumber = document.querySelector(".previous-value")
const result = document.querySelector(".result")
let previousNumber;
let selectedNumber;

function numberHandler(e) {
    selectedNumber = e.target.innerHTML
    showCurrentNumber.innerHTML += selectedNumber
}

function operatorHandler(e) {
    let selectedOperator = e.target.innerHTML;
    showPreviousNumber.innerHTML = showCurrentNumber.innerHTML;
    previousNumber = showCurrentNumber.innerHTML
    showCurrentNumber.innerHTML = ""
    selectedNumber = null
    result.addEventListener("click", () => {
        showCurrentNumber.innerHTML = competeNumber(selectedOperator, selectedNumber, previousNumber)
        showPreviousNumber.innerHTML = ""
    })

}

function deleteHandler() {
    selectedNumber = showCurrentNumber.innerHTML;
    let sliced = selectedNumber.slice(0, selectedNumber.length - 1)
    showCurrentNumber.innerHTML = sliced;
}

function competeNumber(selectedOperator, selectedNumber, previousNumber) {
    let pre = parseInt(selectedNumber)
    let cur = parseInt(previousNumber)
    console.log(cur, pre)
    let computed;
    switch (selectedOperator) {
        case "+":
            computed = cur + pre
            break;
        case "-":
            computed = cur - pre
            break;
        case "*":
            computed = cur * pre
            break;
        case "/":
            computed = cur / pre
            break;
        case "%":
            computed = cur % pre
            break;
        default:
            break;
    }

    return computed
}


numbers.forEach(number => number.addEventListener("click", e => {
    numberHandler(e)
}))

operators.forEach(operator => operator.addEventListener("click", e => {
    operatorHandler(e)

}))

clearBtn.addEventListener("click", e => {
    showCurrentNumber.innerHTML = "";
    showPreviousNumber.innerHTML = "";
})

deleteBtn.addEventListener("click", deleteHandler)