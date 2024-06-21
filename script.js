// Getting references to DOM elements
const inputBx = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the task list
function addTask() {
    if (inputBx.value === '') {
        alert("YOU NEED TO SPECIFY A TASK!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBx.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character for '×'
        li.appendChild(span);
    }
    inputBx.value = ""; // Clear the input box
    savedata(); // Save the updated task list
}

// Event listener for handling clicks within the task list
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle 'checked' class on the task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task if '×' is clicked
        savedata(); // Save the updated task list
    }
}, false);

// Function to save the current task list to local storage
function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display the task list from local storage
function showlist() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initialize the task list when the page loads
showlist();
