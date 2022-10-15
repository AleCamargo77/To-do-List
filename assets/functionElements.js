export let enterButton = document.getElementById("enter");
export let input = document.getElementById("inputUser");

export let ul = document.getElementById("ul");
export let item = document.getElementsByTagName("li");

export function createElement() {
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

export function inputLength() {
  return input.value.length;
}

export function addListClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

export function addListEnter() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createElement();
  }
}
