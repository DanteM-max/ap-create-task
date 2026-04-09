let userInputParent = document.getElementById("array-maker");
let nArea = document.getElementById("item-count");
function makeBoxes() {
    if (document.getElementsByClassName("arrayNumber").length > 0) {
        let outputArea = document.getElementById("array-output");
        outputArea.innerHTML = "";
        let errorText = document.createElement("p");
        errorText.innerText = "I can't make any more boxes. ";
        outputArea.appendChild(errorText);
        return;
    }
    let n = parseInt(document.getElementById('item-count').value);
    if (n == 0 || isNaN(n)) {
        let outputArea = document.getElementById("array-output");
        outputArea.innerHTML = "";
        let errorText = document.createElement("p");
        errorText.innerText = "Hmm... I don't understand how many boxes to make.\nMake sure to fill the box or provide just a number.";
        outputArea.appendChild(errorText);
        makeColors();
        return;
    }

    if (n > 250) {
        let outputArea = document.getElementById("array-output");
        outputArea.innerHTML = "";
        let errorText = document.createElement("p");
        errorText.innerText = "WOAH! That is WAY TOO MANY BOXES! I am not letting you continue. ";
        outputArea.appendChild(errorText);
        return;
    }
    for (let i = 0; i < n; i++) {
        let box = document.createElement("input");
        box.type = "number";
        box.classList.add("arrayNumber");
        box.placeholder = "a value for the array";
        userInputParent.appendChild(box);
    }
    let apCreateTaskFinalizerButton = document.createElement("button");
    userInputParent.appendChild(apCreateTaskFinalizerButton);
    apCreateTaskFinalizerButton.innerText = "Organize";
    apCreateTaskFinalizerButton.addEventListener("click", workWithArray);
    makeColors();
}

function collectArray() {
    let arrayToReturn = [];
    for (let i = 0; i < document.getElementsByClassName("arrayNumber").length; i++) {
        if(isNaN(parseInt(document.querySelectorAll(".arrayNumber")[i].value))) { //isNan provided by MagicSchool AI
            let outputArea = document.getElementById("array-output");
            outputArea.innerHTML = "";
            let errorText = document.createElement("p");
            outputArea.appendChild(errorText);
            errorText.innerText = "Your array has something that isn't a number. Make sure there aren't any numbers in between + or - symbols.\nAlso make sure you filled all the boxes. If you have too many boxes, just refresh the page. ";
            return;
        }
        arrayToReturn.push(parseInt(document.querySelectorAll(".arrayNumber")[i].value));
    }

    return(arrayToReturn);
}
//My student-generated function that accepts a parameter, displays sequencing, iterates through 2 nested loops (with at least n^2 steps), selects a value based on a condition, and uses an array. 
function sortArray(arr) {
    let workingArr = [...arr]; //spread operation given by MagicSchool AI
    let sortedArray = [];
    let lengthOfArr = arr.length;
    let minimum = Number.POSITIVE_INFINITY; // specific format for infinity given by MagicSchool AI
    let minIndex = -1;
    for (let i = 0; i < lengthOfArr; i++) { // iteration
        minimum = Number.POSITIVE_INFINITY;
        minIndex = -1;
        for (let jet = 0; jet < workingArr.length; jet++) {//iteration
            if (workingArr[jet] < minimum) { //selection
                minIndex = jet;
                minimum = workingArr[jet];
            }
        }
        sortedArray.push(workingArr.splice(minIndex,1)[0]);
        
    }
    return sortedArray;
}

function workWithArray() {
    let arrayToSort = collectArray();
    if (arrayToSort == undefined) {
        return;
    }
    let arrToPrint = sortArray(arrayToSort);
    let outputArea = document.getElementById("array-output");
    outputArea.innerHTML = "";
    let arrayInText = document.createElement("p");
    let span = document.createElement("span");
    
    let paraText = "Your organized array is ";
    let spanText = "[";
    for (let i = 0; i < arrToPrint.length - 1; i++) {
        spanText += arrToPrint[i] + ", ";
    }
    spanText += arrToPrint[arrToPrint.length - 1] + "]";
    outputArea.appendChild(arrayInText);
    arrayInText.innerText = paraText;
    span.innerText = spanText;
    arrayInText.appendChild(span);
}


function makeColors() {
    let red = Math.random() * (50-10) + 10;
    let blue = Math.random() * 256;
    let green = Math.random() * 256;
    let textColor = "";
    if (red+blue+green < 282.5) {
        textColor = "white";
    } else {
        textColor = "black";
    }

    for (element of document.querySelectorAll("button")) {
        element.setAttribute("style","background-color: rgb(" + red + "," + blue + "," + green + "); color:" + textColor);
    }
}