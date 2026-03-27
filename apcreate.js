let userInputParent = document.getElementById("array-maker");
let nArea = document.getElementById("item-count");
function makeBoxes() {
    let n = parseInt(document.getElementById('item-count').value);
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
        arrayToReturn.push(parseInt(document.querySelectorAll(".arrayNumber")[i].value));
    }

    return(arrayToReturn);
}
//My student-generated function that accepts a parameter, displays sequencing, iterates through 2 nested loops (with at least n^2 steps), selects a value based on a condition, 
function sortArray(arr) {
    let workingArr = [...arr]; // given by MagicSchool AI
    console.log(arr);
    console.log(workingArr);
    let sortedArray = [];
    console.log(sortedArray);
    let lengthOfArr = arr.length;
    console.log(lengthOfArr);
    let minimum = Number.POSITIVE_INFINITY;
    let minIndex = -1;
    console.log(minimum);
    for (let i = 0; i < lengthOfArr; i++) { // iteration
        minimum = Number.POSITIVE_INFINITY;
        minIndex = -1;
        for (let jet = 0; jet < workingArr.length; jet++) {//iteration
            if (workingArr[jet] < minimum) { //selection
                minIndex = jet;
                minimum = workingArr[jet];
                console.log(minimum);
            }
        }
        sortedArray.push(workingArr.splice(minIndex,1)[0]);
        console.log(sortedArray);
        
    }
    return sortedArray;
}

function workWithArray() {
    let arrToPrint = sortArray(collectArray());
    let outputArea = document.getElementById("array-output");
    let arrayInText = document.createElement("p");
    let paraText = "Your organized array is [";
    for (let i = 0; i < arrToPrint.length; i++) {
        paraText += arrToPrint[i] + ", ";
    }
    paraText += "]";
    outputArea.appendChild(arrayInText);
    arrayInText.innerText = paraText;
}