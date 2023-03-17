// javascript for allblogs.html
const container = document.querySelector('main');

const renderPosts = async() => {
    let uri = "https://cute-pear-sheep-slip.cyclic.app/posts";

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
            <div class="post">
                <img src="${post.article_image}" >
                <div class="description">
                    <h1>${post.title}</h1>
                    <p class="body">${post.body.slice(0, 200)}</p>
                    <a href="/blogpage.html?id=${post._id}"  class="read-more">Read more...</a>
                </div>        
            </div>
        `
    });
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded',() => renderPosts());