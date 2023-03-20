//ACCESS THE FORM ELEMENT
const form = document.querySelector('form');


const verify = async(e) =>{
    e.preventDefault();

    //SAVE THE LOGIN INFO
    const loginInfo = {
        "eml": form.email.value,
        "pwd": form.pw.value
    };
    console.log(loginInfo);

    //SEND THE LOGIN INFO FOR VERIFICATION
    const res = await fetch('https://cute-pear-sheep-slip.cyclic.app/authenticate', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //RECEIVE THE ACCESS TOKEN || ERROR MESSAGES
    const result = await res.json();
    console.log(result);

    //SAVE THE ACCESS TOKEN IN MEMORY
    //REDIRECT TO ADMIN HOME PAGE
};


//LISTEN FOR THE SUBMIT EVENT IN THE FORM
form.addEventListener('submit', verify);
