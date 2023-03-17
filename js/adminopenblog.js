// javascript for blog view page for admin
const container = document.querySelector('.wrapper');
const id = new URLSearchParams(window.location.search).get('id');


const renderDetails = async() => {
    const res = await fetch('https://cute-pear-sheep-slip.cyclic.app/posts/' + id);
    const post = await res.json();
    console.log(post);
    if(post.message){
        alert(post.message);
    }

    const template = `
        <form>
            <img src="${post.article_image}" alt="">
            <textarea name="title" class="title"></textarea>
            <textarea name="image" class="imgURL"></textarea>
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
    const blogImage = document.querySelector('.imgURL');
    blogImage.innerHTML = post.article_image;

    const form = document.querySelector('form');
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
        console.log('update button pressed.');

        let doc = {
            "id": "640cb328d851f265dcde6973",
            article_image: form.image.value,
            title: form.title.value,
            body: form.blogcontent.value,
        };
        console.log(doc);

        let options = {
            method: 'PUT',
            body: JSON.stringify(doc),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch('https://cute-pear-sheep-slip.cyclic.app/posts/', options)
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data);
                if (data.message) {
                    alert(data.message);
                }
            });
    });

}

window.addEventListener('DOMContentLoaded', () => renderDetails());

