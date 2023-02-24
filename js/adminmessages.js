//javascript for admin messages html

const container = document.querySelector('.messages-section');

const renderMessages = async(e) => {
    let uri = 'https://erin-cautious-alligator.cyclic.app/messages';

    try{
        const res = await fetch(uri);
        const messages = await res.json();
        console.log(messages);

        let template = '';
        messages.forEach(message =>{
            console.log(message.id);
            template += `
                <div class="message-row">
                    <p>${message.name}</p>
                    <p class="test">${message.email}</p>
                    <p>10/2/2023</p>
                    <div class="action-links">
                        <a href="adminopenmessage.html?id=${message.id}">Open</a>
                        <button class="button" data-id = "${message.id}">Delete</button>
                    </div>
                </div>
            `
        });
        container.innerHTML = template;

        const deleteBtns = document.querySelectorAll('.button');
        deleteBtns.forEach(button => {
            button.addEventListener('click', async(e) => {
                const id = e.target.dataset.id;
                console.log("Delete button clicked for id = " + id);

                const res = await fetch(' http://localhost:3001/messages/' + id, {
                    method: 'Delete'
                });
            });
        });

    } catch (error){
        console.error(error);
    }
}

window.addEventListener('DOMContentLoaded', () => renderMessages());
