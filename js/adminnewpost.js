//javascript for creating new post
const form = document.querySelector('form');

const createPost = async(e) => {
    e.preventDefault();

    let uri = 'https://erin-cautious-alligator.cyclic.app/posts';

    const doc = {
        "article_image": form.blogimage.value,
        title: form.title.value,
        body: form.blog.value,
        likes: null,
        dislikes: null,
        comment: null
    };
    
    await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    window.location.replace('admin_home.html');
}

form.addEventListener('submit', createPost)
