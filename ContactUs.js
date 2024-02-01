// Function to allow only numbers in the phone input field
function restrictToNumbers(inputField) {
    inputField.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, ''); // Replace all non-numeric characters with empty string
    });
}

// Function to allow only letters and spaces in the name input field
function restrictToLetters(inputField) {
    inputField.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^A-Za-z ]/g, ''); // Replace all non-alphabetic characters with empty string
    });
}

// Wait for the HTML content to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the input fields by their respective labels
    const inputBoxes = document.querySelectorAll('.contactForm .inputBox');

    //Apply restrictions based on labels
    inputBoxes.forEach((box) => {
        const label = box.querySelector('span').textContent.toLowerCase();
        const inputField = box.querySelector('input[type="text"]');

        if (label === 'phone') {
            restrictToNumbers(inputField);
        } else if (label === 'full name') {
            restrictToLetters(inputField);
        }
    });
});
