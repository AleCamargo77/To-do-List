let enterButton = document.getElementById("enter");
let input = document.getElementById("inputUser");
let ul = document.getElementById("ul");
let item= document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createElement() {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode(" "));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);

    function deleteItem() {
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListClick);
input.addEventListener("keypress", addListEnter);

function addListClick() {
    if (inputLength() > 0) {
        createElement();
    }
}

function addListEnter() {
    if (inputLength() > 0 && event.keyCode === 13) {
        createElement();
    }
}

