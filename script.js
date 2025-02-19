// Select all buttons with the class "button-outline"
const buttons = document.querySelectorAll('.nagivation');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        console.log("abc");
        event.preventDefault(); // Prevent the default jump
        const targetId = this.getAttribute('href'); // Get the target ID
        const targetElement = document.querySelector(targetId);
        const offset = -50; // Adjust this value for the desired offset in pixels

        window.scrollTo({
            top: targetElement.offsetTop + offset,
            behavior: 'smooth'
        });
    });
});