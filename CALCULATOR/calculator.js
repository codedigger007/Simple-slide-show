const inputs = document.getElementById("inputs")
const equalToo = document.getElementById("equal-to")
const clickButtons = document.getElementById("buts")
function division() {
inputs.value += " / "
}

function multiplication() {
    inputs.value += " * "
    }

function substraction() {
    if(inputs.value == "") {
        inputs.value += "-"
    } else {
        inputs.value += " - "
    }
    
        }
function addition() {
    inputs.value += " + "
        }
clickButtons.onclick = function(event) {
    inputs.value += event.target.value
}
function deletes() {
    let figuresGot = inputs.value
    let newFig = ""
    let newReg = /\d+\.\d+$/
    if(newReg.test(figuresGot)) {
        console.log(figuresGot.match(newReg))
        newFig = figuresGot.replace(newReg, "")
    } else if(figuresGot[figuresGot.length - 1] !== " ") {
            newFig = figuresGot.slice(0, -1)
            console.log("no")
        } else {
            newFig = figuresGot.slice(0, -3)
        }
    inputs.value = newFig
}

let d = 0
let e = 0
let b = []
let c = []
function getValue() {
let figs = inputs.value
let figsReg = /^-\d+|\d+\.\d+|\d+/ig;
let signReg = /\/|\+|\*|\-/ig;
b = figs.match(figsReg)
c = figs.match(signReg)
calculate()
inputs.value = d.toString()
}

window.addEventListener("keydown", e => {
    let z = e.key
    let y = /\d/
    if(y.test(z) == false) {
       e.preventDefault()
    }
    if(z == "Backspace") {
        deletes()
    } if(z == "+") {
        addition()
    }  if(z == "-") {
        substraction()
    }  if(z == "*") {
        multiplication()
    }  if(z == "/") {
        division()
    } if(z == "Enter") {
        getValue()
    }
   
})

function getSquareRoot() {
    let figured = inputs.value
    let figuredReg = /\d+/
    let notReg = /\/|\+|\*|\-/
    let r = 0
    if(figuredReg.test(figured) && !notReg.test(figured)) {
       r = Math.sqrt(inputs.value)
       inputs.value = r
    }   
}

function getSquare() {
    let figureds = inputs.value
    let figuredRegs = /\d+/
    let notRegs = /\/|\+|\*|\-/
    let r = 0  
    console.log(figureds)
    if(figuredRegs.test(figureds) && !notRegs.test(figureds)) {
        r = Math.pow(figureds, 2)
        inputs.value = r
        
     }
}

function getLog() {
    let figureds = inputs.value
    let figuredRegs = /\d+/
    let notRegs = /\/|\+|\*|\-/
    let r = 0  
    console.log(figureds)
    if(figuredRegs.test(figureds) && !notRegs.test(figureds)) {
        r = Math.log(figureds)
        inputs.value = r
        console.log(r)
     }
}
    function calculate() {
        if(c.length == b.length) {
            c.shift()
        }
        while (c.length > 0) {
            if(c.includes("/")) {
                e = b[c.indexOf("/")] / b[c.indexOf("/") + 1] 
                b.splice(c.indexOf("/"), 2, e)
                c.splice(c.indexOf("/"), 1)
                e = 0
                    }
                if(c.includes("*")) {
                e = b[c.indexOf("*")] * b[c.indexOf("*") + 1] 
                b.splice(c.indexOf("*"), 2, e)
                c.splice(c.indexOf("*"), 1)
                e = 0
                    }
                    if(c.includes("-") && !c.includes("/") && !c.includes("*")) {
                        e = b[c.indexOf("-")] - b[c.indexOf("-") + 1] 
                        b.splice(c.indexOf("-"), 2, e)
                        c.splice(c.indexOf("-"), 1)
                        e = 0
                            }
               if(c.includes("+") && !c.includes("/") && !c.includes("*") && !c.includes("-")) {
                e = parseInt(b[c.indexOf("+")]) + parseInt(b[c.indexOf("+") + 1]) 
                b.splice(c.indexOf("+"), 2, e)
                c.splice(c.indexOf("+"), 1)
                e = 0
                    }
            }
            d = b[0]   
        }

        