const form = document.querySelector('form');

const saveMessage = async(e) => {
    e.preventDefault();

    const doc = {
        name: form.contactName.value,
        email: form.contactEmail.value,
        msg: form.theMessage.value
    };
    console.log(doc);

    await fetch('https://cute-pear-sheep-slip.cyclic.app/messages',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    window.location.replace('/index.html');
}

form.addEventListener('submit', saveMessage)