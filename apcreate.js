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
    apCreateTaskFinalizerButton.addEventListener("click", null);
}

function collectArray() {
    let arrayToReturn = [];
    for (let i = 0; i < document.getElementsByClassName("arrayNumber").length; i++) {
        arrayToReturn.push(parseInt(document.querySelectorAll(".arrayNumber")[i].value));
    }

    return(arrayToReturn);
}

function sortArray(arr) {
    let sortedArray = [];
    console.log(sortedArray);
    let lengthOfArr = arr.length;
    console.log(lengthOfArr);
    let minimum = arr[0];
    for (let i = 0; i < lengthOfArr; i++) {
        for (let jet = 0; jet < arr.length; jet++) {
            if (arr[jet] < minimum) {
                minimum = arr[jet];
            }
        sortedArray.push(arr.pop(indexOf(minimum)));
        }
    }
}