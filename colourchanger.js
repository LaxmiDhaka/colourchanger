const buttons = document.querySelectorAll('.button'); // Correct class
const body = document.querySelector('body'); // Selects the actual body

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) { // Fixed function name
        body.style.backgroundColor = e.target.id; // Corrected property name
    });
});
