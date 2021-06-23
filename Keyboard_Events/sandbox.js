const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // validation
    const username = form.username.value;
    

    if (usernamePattern.test(username)) {
        //feedaback good info
        feedback.textContent = 'That username is valid.';
    } else {
        //feedback help info
        feedback.textContent = 'Username must contain letters only and be between  6-12 characters.';
    }
});


//live feedback

form.username.addEventListener('keyup', e => {
    console.log(e);
    if(usernamePattern.test(e.target.value)) {
        //console.log('passed');
        form.username.setAttribute('class', 'success');
    } else {
        //console.log('failed');
        form.username.setAttribute('class', 'error');
    }
})