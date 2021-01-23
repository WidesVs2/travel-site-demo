console.log('Contact Page');

const messageBox = document.getElementById("message");
const form = document.getElementById("contact-form");
const closeBtn = document.getElementById("close-btn");
const submit = document.getElementById("contact-submit");

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    messageBox.classList.toggle("active");
    location.reload();
});

form.addEventListener("submit", (e) => {
    messageBox.classList.toggle("active");
});


