//ACCESS THE FORM ELEMENT
const form = document.querySelector('form');

//LISTEN FOR THE SUBMIT EVENT IN THE FORM AND ...
form.addEventListener('submit', async(e) =>{
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
    }).catch((error) => {
        Toastify({
            text: error.message,
            duration: 3000, // Time in milliseconds
            backgroundColor: "linear-gradient(to right, #ffcccc, #ff6666)"
        }).showToast();
    });

    //RECEIVE THE ACCESS TOKEN || ERROR MESSAGES
    const result = await res.json();

    //SAVE THE ACCESS TOKEN IN MEMORY
    if(result.accessToken){
        localStorage.setItem("accessToken", result.accessToken);
        //REDIRECT TO ADMIN HOME PAGE
        Toastify({
            text: "LOGGED IN!",
            duration: 3000, // Time in milliseconds
            backgroundColor: "linear-gradient(to bottom, #00c853, #00e676)"
        }).showToast();
        location.href = "/admin_home.html";
    }else if ( result.message){
        Toastify({
            text: result.message,
            duration: 3000, // Time in milliseconds
            backgroundColor: "linear-gradient(to right, #ffcccc, #ff6666)"
        }).showToast();
    }
    
});
