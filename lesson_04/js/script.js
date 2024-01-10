document.getElementById('cr-form').addEventListener('submit', function(event) {
    console.log('Form submitted with data:', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    });

    // для демонстрации - отменяем отправку
    event.preventDefault();
});
