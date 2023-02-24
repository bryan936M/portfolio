//javascript for signup pages

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('it works.');

    const doc = {
        firstName: form.fnm.value,
        lastName: form.lnm.value,
        email: form.eml.value,
        password: form.pw.value
    }
    console.log(doc);

    fetch('https://erin-cautious-alligator.cyclic.app/users',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    window.location.replace('login.html');
});