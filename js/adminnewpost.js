//javascript for creating new post
const form = document.querySelector('form');

const createPost = (e) => {
    // prevent automatic resetting
    e.preventDefault();

    // retrieve & save form data
    const doc = {
        "article_image": form.blogimage.value,
        title: form.title.value,
        body: form.blog.value
    };
    
    // access the API & save to db
    let uri = 'https://cute-pear-sheep-slip.cyclic.app/posts';
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        console.log(data);
        if(data.message){
            alert(data.message);
        }
    });

    //window.location.replace('admin_home.html');
}

//Listen for submit & execute create Post function.
form.addEventListener('submit', createPost)
