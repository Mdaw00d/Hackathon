"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.textContent === "No") {
                button.textContent = "Yes";
                button.classList.add("yes");
            }
            else {
                button.textContent = "No";
                button.classList.remove("yes");
            }
        });
    });
});
