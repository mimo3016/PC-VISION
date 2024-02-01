let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};


// Function to check if the input contains numeric characters
function containsNumbers(input) {
    return /\d/.test(input);
}

// Add a keydown event listener to the name input field
nameField.addEventListener("keydown", function (event) {
    let inputValue = event.key;

    // Check if the input key is numeric
    if (containsNumbers(inputValue)) {
        // If the key is numeric, prevent it from being added to the input field
        event.preventDefault();
    }
});