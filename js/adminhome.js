//javascript for the admin home page('Specifically; recent blogs section')

const deleteBtn = document.querySelector('.button');
const container = document.querySelector('.blogs-section');
const renderPosts = async() => {
    let uri = ' http://localhost:3001/posts?_sort=id&_order=desc';
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
                    <a class="open-link" href="adminopenblog.html?id=${post.id}">Open</a>
                    <button class="button">Delete</button>
                </div>
            </div>
        `

        // deleteBtn.addEventListener('click', async (e) => {
        //     const res = await fetch('http://localhost:3000/posts/' + post.id, {
        //         method: 'DELETE'
        //     })
        //     window.location.replace('/admin_home.html');
        // })
    })

    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded',() => renderPosts());