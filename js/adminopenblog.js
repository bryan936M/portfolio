// javascript for blog view page for admin
const container = document.querySelector('.wrapper');
const id = new URLSearchParams(window.location.search).get('id')
const renderDetails = async() => {
    const res = await fetch('https://erin-cautious-alligator.cyclic.app/posts/' + id);
    const post = await res.json();
    console.log(post);

    const template = `
        <h1>${post.title}</h1>
        <img src="${post.article_image}" alt="">
        <p>${post.body}</p>
    `
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());