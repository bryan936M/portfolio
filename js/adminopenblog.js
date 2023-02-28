// javascript for blog view page for admin
const container = document.querySelector('.wrapper');
const id = new URLSearchParams(window.location.search).get('id');


const renderDetails = async() => {
    const res = await fetch('https://erin-cautious-alligator.cyclic.app/posts/' + id);
    const post = await res.json();
    console.log(post);

    const template = `
        <form>
            <img src="${post.article_image}" alt="">
            <textarea name="title" class="title"></textarea>
            <textarea name="blogcontent" class = "blog-content"></textarea>
            <div class="link-section">
                <a href="admin_home.html">Go back</a>
                <button type="submit" class="update-btn">Update</button>
                <button class="dlt-btn">Delete</button>
            </div>
        </form>
    `
    container.innerHTML = template;

    const blogText = document.querySelector(".blog-content");
    blogText.innerHTML = post.body;
    const titleText = document.querySelector('.title');
    titleText.innerHTML = post.title;

    const form = document.querySelector('form');
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
        console.log('update button pressed.');

        let doc = {
            article_image: post.article_image,
            id: post.id,
            title: form.title.value,
            body: form.blogcontent.value,
            likes: post.likes,
            dislikes: post.dislikes
        };
        console.log(doc);

        let options = {
            method: 'PUT',
            body: JSON.stringify(doc)
        }

        await fetch('https://erin-cautious-alligator.cyclic.app/posts/' + id, options).then(response => console.log(response.status));
    });

}

window.addEventListener('DOMContentLoaded', () => renderDetails());

