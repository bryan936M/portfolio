// javascript for blog pages
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.blog-content');
const form = document.querySelector('form');

const renderBlog = async() => {
    const res = await fetch('http://localhost:3001/posts/' + id);
    const post = await res.json();
    console.log(post);
    
    const template = `
        <div class="post">
            <h1>${post.title}</h1>
            <img src="${post.article_image}" alt="">
            <p>${post.body}</p>
            <p>${post.likes}</p>
        </div>
    `
    container.innerHTML = template;
}

const addComment = async(e) => {
    e.preventDefault();
    //there's code to be added for comment section(passing to comments in db.json)
}

window.addEventListener('DOMContentLoaded', () => renderBlog());
form.addEventListener('submit', addComment);
