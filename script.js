document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field");
    const checkBtn = document.getElementById("check-btn");
    const list = document.getElementById("list");

    // Function to create a new list item
    const createListItem = (task) => {
        const listItem = document.createElement("span");
        listItem.className = "list-item";

        const dots = document.createElement("span");
        dots.className = "dots";

        const taskText = document.createElement("p");
        taskText.textContent = task;

        const recycleBin = document.createElement("img");
        recycleBin.src = "./recycle-bin.png";
        recycleBin.alt = "Delete Task";
        recycleBin.id = "recycle";
        recycleBin.style.cursor = "pointer"; // Change cursor to pointer for better UX

        // Event listener to toggle completion
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("completed");
            dots.classList.toggle("solid");
            taskText.classList.toggle("strikethrough");
        });

        // Append elements to the list item
        listItem.appendChild(dots);
        listItem.appendChild(taskText);
        listItem.appendChild(recycleBin);

        // Add delete functionality
        recycleBin.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the click event from bubbling up to the list item
            list.removeChild(listItem);
        });

        return listItem;
    };

    // Add task to the list when button is clicked
    checkBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        const task = inputField.value.trim();

        if (task) {
            const listItem = createListItem(task);
            list.appendChild(listItem);
            inputField.value = ""; // Clear the input field
        }
    });

    // Optional: Allow pressing Enter to add the task
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            checkBtn.click(); // Trigger the button click
        }
    });
});
