// script.js

// Function to show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Function to handle form submission (sending email)
function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your email sending logic here
    // For demonstration purposes, let's just log the form data
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);
    // You can replace the console.log with your email sending logic
    // After sending email, you may want to close the modal
    closeModal('contactModal');
}

// Event listener for contact form submission
document.getElementById('contactForm').addEventListener('submit', sendEmail);

// Event listener for clicking on the contact link
document.getElementById('contactLink').addEventListener('click', () => {
    showModal('contactModal');
});

// Event listener for clicking on the order button
document.getElementById('orderButton').addEventListener('click', () => {
    showModal('orderModal');
});

// Event listener for closing modal when clicking on the close button
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn.closest('.modal').id);
    });
});

// Event listener for closing modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            closeModal(modal.id);
        }
    });
});
