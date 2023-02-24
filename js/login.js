// login validation javascript

const form = document.querySelector('form');
const email = document.querySelector('.email_input');
const password = document.querySelector('.pass_input');

const verify = async(e) =>{
    e.preventDefault();
    console.log('it works');
    console.log(email + password);

    const res = await fetch('https://erin-cautious-alligator.cyclic.app/users');
    const user_array = await res.json();
    console.log(user_array);

    user_array.forEach(user => {
        if(user.email === email.value && user.password == password.value){
            window.location.replace('/admin_home.html');
        } else {
            window.location.replace('/index.html');
        }
    });

    


};

form.addEventListener('submit', verify);