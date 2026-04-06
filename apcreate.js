let userInputParent = document.getElementById("array-maker");
let nArea = document.getElementById("item-count");
function makeBoxes() {
    if (document.getElementsByClassName("arrayNumber").length > 0) {
        return;
    }
    let n = parseInt(document.getElementById('item-count').value);
    if (n == 0 || isNaN(0)) {
        let errorText = document.createElement("p");
        errorText.innerText = "Hmm... I don't understand how many boxes to make.\nMake sure to fill the box or provide just a number.";
        userInputParent.appendChild(errorText);
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
}

function collectArray() {
    let arrayToReturn = [];
    for (let i = 0; i < document.getElementsByClassName("arrayNumber").length; i++) {
        if(isNaN(parseInt(document.querySelectorAll(".arrayNumber")[i].value))) { //isNan provided by MagicSchool AI
            let errorText = document.createElement("p");
            userInputParent.appendChild(errorText);
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
    console.log(minimum);
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
    let arrayInText = document.createElement("p");
    let paraText = "Your organized array is [";
    for (let i = 0; i < arrToPrint.length - 1; i++) {
        paraText += arrToPrint[i] + ", ";
    }
    paraText += arrToPrint[arrToPrint.length - 1] + "]";
    outputArea.appendChild(arrayInText);
    arrayInText.innerText = paraText;
}