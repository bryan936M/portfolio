//javascript for admin messages html

const container = document.querySelector('.messages-section');

const renderMessages = async(e) => {
    let uri = 'https://cute-pear-sheep-slip.cyclic.app/messages';

    try{
        const res = await fetch(uri);
        const messages = await res.json();
        console.log(messages);

        let template = '';
        messages.forEach(message =>{
            console.log(message._id);
            template += `
                <div class="message-row">
                    <p>${message.name}</p>
                    <p class="test">${message.email}</p>
                    <p>10/2/2023</p>
                    <div class="action-links">
                        <a href="adminopenmessage.html?id=${message._id}">Open</a>
                        <button class="button" data-id = "${message._id}">Delete</button>
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

                const res = await fetch(' https://cute-pear-sheep-slip.cyclic.app/messages/' + id, {
                    method: 'Delete',
                    credentials: 'include'
                });
                Toastify({
                    text: "Deleted",
                    duration: 3000, // Time in milliseconds
                    backgroundColor: "background: linear-gradient(to bottom, #FF355E, #FF355E 50%, #FF0000 50%)"
                }).showToast();
                location.reload();
            });
        });

        //LISTEN TO LOGOUT LINK 
        const logoutBtn = document.querySelector('.logout');
        logoutBtn.addEventListener('click', async (e) => {
            //SEND LOGOUT REQUEST TO API
            const res = await fetch('https://cute-pear-sheep-slip.cyclic.app/logout', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = res.json();
            if (result.message) {
                Toastify({
                    text: result.message,
                    duration: 3000, // Time in milliseconds
                    backgroundColor: "background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 50%, #dbdbdb 100%)"
                }).showToast();
            } else {
                //DELETE ACCESSTOKEN & REFRESHTOKEN COOKIE
                localStorage.removeItem("accessToken");
                document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                //GO TO LOGIN PAGE
                location.href = "/login.html";
            }
        });

    } catch (error){
        console.error(error);
    }
}

window.addEventListener('DOMContentLoaded', () => renderMessages());
