//javascript for open message
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const container = document.querySelector('.msg-box');

const renderMessages = async() => {
    const res = await fetch('https://erin-cautious-alligator.cyclic.app/messages/'+id);
    const msg = await res.json();
    console.log(msg);

    let template = `
        <div class="msg-content">
            <div class="heading">
                <h3>From: ${msg.name}</h3>
                <h3>Email: ${msg.email}</h3>
            </div>
            <p class="message">${msg.msg}</p>
        </div>
    `;
    
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderMessages());