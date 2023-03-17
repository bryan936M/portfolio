//javascript for the admin home page('Specifically; recent blogs section')

const deleteBtn = document.querySelector('.button');
const container = document.querySelector('.blogs-section');
const renderPosts = async() => {
    let uri = ' https://cute-pear-sheep-slip.cyclic.app/posts/';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

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

    const deleteBtns = document.querySelectorAll('.button');
    deleteBtns.forEach(button =>{
        button.addEventListener('click', async(e) => {
            const id = e.target.dataset.id;
            console.log("Click by button " + id);

            const res = await fetch(' https://cute-pear-sheep-slip.cyclic.app/posts/' + id, {
                method: 'Delete'
            });
        });
    });
    

    

}

window.addEventListener('DOMContentLoaded',() => renderPosts());
