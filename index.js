let operations = []
const operators = ['+', '-', '*', '/']

function buttonClicked(value) {
    let oldValue = document.getElementById('displayScreen').textContent
    if(operators.includes(oldValue)) {
        oldValue = ""
    } 
    let newValue = oldValue + value 
    let element = document.getElementById('displayScreen')
    element.innerHTML = newValue;
    console.log(operations);
}

function opButtonClicked(operator) {
    let element = document.getElementById('displayScreen')
    let textElement = document.getElementById('displayScreen').textContent
    operations.push(textElement);
    element.innerHTML = operator
    if (operators.includes(operations[operations.length - 1])) {
        console.log('operator clicked already')
    } else {
        operations.push(operator)
    }
    console.log(operations)
    
}

function equalsClicked() {
    let element = document.getElementById('displayScreen')
    let textElement = document.getElementById('displayScreen').textContent
    operations.push(textElement)
    console.log("operations.join(' '): ", operations.join(' '))
    let result = eval(operations.join(' '))
    if (result != undefined) {
        element.innerHTML = result
        operations = []
    }
    console.log(operations)
}

function clearClicked() {
    let element = document.getElementById('displayScreen')
    element.innerHTML = ""
    operations = []
}