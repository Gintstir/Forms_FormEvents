const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
})


//testing RegEx
const username = 'shaunp';
const pattern = /^[a-z]{6,}$/

//let result = pattern.test(username);
//console.log(result);
// if(result) {
//     console.log("regex text passed 😁");
// } else {
//     console.log("regex test failed 😫");
// }

let result = username.search(pattern); //returns a number, position of where it finds the match
console.log(result); //-1 result means no match.  