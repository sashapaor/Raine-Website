document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const messageOutput = document.getElementById('message-output');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity() === false) {
                form.classList.add('was-validated');
                messageOutput.textContent = 'Please fill out all required fields correctly.';
                messageOutput.className = 'mt-3 text-center text-danger';
                return;
            }

            form.classList.remove('was-validated');
            
            const name = document.getElementById('fullName').value;
            const order = document.getElementById('orderMessage').value;

            messageOutput.innerHTML = `Thank you, <strong>${name}</strong>! Your order for <em>${order}</em> has been received. We will contact you soon.`;
            messageOutput.className = 'mt-3 text-center text-success';
        });
    }

    const rentButtons = document.querySelectorAll('.custom-btn-effect');
    rentButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Rent button clicked! Redirecting to contact page...');
        });
    });
});