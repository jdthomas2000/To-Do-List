let toDoList = [];
const listContainer = document.querySelector("#listItem");
const completedlistContainer = document.querySelector("#completeTasks");
let removedelements = [];

let addItem = (input) => {
  toDoList.push(input);
  //   console.log(toDoList);
};
let inputField = document.querySelector("#inputitem");

let myButton = document.querySelector("#addItemButton");
myButton.addEventListener("click", () => {
  // add user input to to do list then reset value in the input field
  addItem(inputField.value);
  updateList();
  inputField.value = "";
});

//console.log(listContainer);
let updateList = () => {
  //using DOM to create list items under our unstructured list
  listContainer.innerHTML = "";
  toDoList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    listContainer.append(listItem);
    // console.log(listContainer);

    listItem.addEventListener("dblclick", () => {
      // remove list items that we clicked on then rerun updateList with an updated to do list without the list item we clicked on
      let removedItems = toDoList.splice(index, 1);
      removedItems.forEach((item) => {
        removedelements.push(item);
      });
      //using DOM to create list items under our unstructured list
      completedlistContainer.innerHTML = "";
      removedelements.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.classList.add("completedLi");

        completedlistContainer.append(listItem);
      });
      updateList();
    });
    listItem.addEventListener("click", () => {
      listItem.classList.add("strikethrough");
    });
  });
  const list = document.querySelector("ul");

  list.addEventListener("dblclick", (completedList) => {
    // remove clicked on item from the html file
    completedList.target.remove();
  });
};

// console.log(toDoList);
