const form = document.querySelector(".form");
form.addEventListener("submit", onSubmitHandler);

const input = document.querySelector(".input");
input.addEventListener("input", onInputChangeHandler);

const groceryList = document.querySelector(".grocery-list");
groceryList.addEventListener("click", itemActionsHandler);

let inputText = null;
let itemId = null;
const groceryItems = [];

function onInputChangeHandler(ev) {
  inputText = ev.target.value;
}

function onSubmitHandler(ev) {
  ev.preventDefault();

  const groceryItem = {
    name: input.value,
    id: Math.random() * 100,
  };

  groceryItems.push(groceryItem);
  displayItem(groceryItem);

  form.reset();
}

function displayItem(item) {
  const groceryItem = document.createElement("li");
  groceryItem.classList.add("item");
  groceryItem.id = item.id;
  groceryItem.innerHTML = `<span class="grocery-name">${item.name}</span>
        <div class="actions">
          <button class="btn-secondary edit-btn">
            <svg
              width="12px"
              height="12px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pen-to-square"
              class="svg-inline--fa fa-pen-to-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"
              ></path>
            </svg>
          </button>
          <button class="btn-secondary trash-btn">
            <svg
              width="12px"
              height="12px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash"
              class="svg-inline--fa fa-trash"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"
              ></path>
            </svg>
          </button>
        </div>`;
  groceryList.append(groceryItem);
}

function itemActionsHandler(ev) {
  const button = ev.target.closest("button");
  const editAction = button.classList.contains("edit-btn");
  const deleteAction = button.classList.contains("trash-btn");

  if (editAction) {
    console.log("edit");
    console.log(button.parentNode.parentNode.id);
  }
  if (deleteAction) {
    console.log("delete");
  }
}
