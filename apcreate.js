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
    apCreateTaskFinalizerButton.addEventListener("click", sortArray);
}

function collectArray() {
    let arrayToReturn = [];
    for (let i = 0; i < document.getElementsByClassName("arrayNumber").length; i++) {
        arrayToReturn.push(parseInt(document.querySelectorAll(".arrayNumber")[i].value));
    }

    return(arrayToReturn);
}

function sortArray() {
    let arr = collectArray();
    let workingArr = arr;
    console.log(arr);
    console.log("We will dismember" + workingArr + " for its crime of not being sorted correctly. ");
    let sortedArray = [];
    console.log(sortedArray);
    let lengthOfArr = arr.length;
    console.log(lengthOfArr);
    let minimum = Number.POSITIVE_INFINITY;
    let minIndex = -1;
    console.log(minimum);
    for (let i = 0; i < lengthOfArr; i++) {
        minimum = Number.POSITIVE_INFINITY;
        minIndex = -1;
        for (let jet = 0; jet < workingArr.length; jet++) {
            if (workingArr[jet] < minimum) {
                minIndex = jet;
                minimum = workingArr[jet];
                console.log(minimum);
            }
        }
        sortedArray.push(arr.splice(minIndex,1)[0]);
        console.log(sortedArray);
    }
}