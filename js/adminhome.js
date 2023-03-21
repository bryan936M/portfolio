//javascript for the admin home page('Specifically; recent blogs section')

const deleteBtn = document.querySelector('.button');
const container = document.querySelector('.blogs-section');
const renderPosts = async() => {
    //ACCESS & PULL DATA FROM REST API
    let uri = ' https://cute-pear-sheep-slip.cyclic.app/posts/';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

    //CREATE & DISPLAY TEMPLATE CONTAINING DATA
    let template = '';
    posts.forEach(post => {
        template += `
            <div class="record">
                <p class="title">${post.title}</p>
                <p class="date">12/11/2022</p>
                <div class="links">
                    <a class="open-link" href="adminopenblog.html?id=${post._id}">Open</a>
                    <button class="button" data-id = "${post._id}" >Delete</button>
                </div>
            </div>
        `
    })
    container.innerHTML = template;

    
    //ACCESS ALL BUTTONS & LISTEN FOR CLICK
    const deleteBtns = document.querySelectorAll('.button');
    deleteBtns.forEach(button =>{
        button.addEventListener('click', async(e) => {
            //ACCESS THE CLICKED BTN THRU ITS DATASET ID
            const id = e.target.dataset.id;

            //SEND DELETE REQUEST WITH ID IN PARAMS
            const res = await fetch(' https://cute-pear-sheep-slip.cyclic.app/posts/' + id, {
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
        const res = await fetch('https://cute-pear-sheep-slip.cyclic.app/logout',{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = res.json();
        if( result.message){
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

}

window.addEventListener('DOMContentLoaded',() => renderPosts());
