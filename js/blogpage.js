// javascript for blog pages
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.blog-content');
const form = document.querySelector('form');


let like = "no";
let dislike = "no";
let likes = 0;



const renderBlog = async() => {
    const res = await fetch('https://erin-cautious-alligator.cyclic.app/posts/' + id);
    const post = await res.json();
    console.log(post);
    
    const template = `
        <div class="post">
            <img src="${post.article_image}" alt="">
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>
    `
    container.innerHTML = template;


}

const addComment = async(e) => {
    e.preventDefault();
    console.log("submitted comment")
    
}

window.addEventListener('DOMContentLoaded', () => renderBlog());
form.addEventListener('submit', addComment);
