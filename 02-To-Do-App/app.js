function main() {
  const addInput = document.getElementById("addInput");
  const addBtn = document.getElementById("addBt");
  const newTask = document.getElementById("newTask");

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = addInput.value.trim();

    if (inputValue != "") {
      const newDiv = document.createElement("div");

      const newParagraph = document.createElement("p");
      const newButton = document.createElement("button");

      newParagraph.textContent = inputValue;
      newButton.textContent = "Delete";
      newTask.appendChild(newDiv);
      newDiv.appendChild(newParagraph);
      newDiv.appendChild(newButton);

      newButton.addEventListener("click", () => {
        newDiv.removeChild(newParagraph);
        newDiv.removeChild(newButton);
      });

      addInput.value = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
