const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if (usernamePattern.test(username)) {
        //feedaback good info
        feedback.textContent = 'That username is valid.';
    } else {
        //feedback help info
        feedback.textContent = 'Username must contain letters only and be between  6-12 characters.';
    }
});

