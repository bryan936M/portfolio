const container = document.querySelector('.left-col');


const renderPostById = async() => {
    //GET POSTS FROM API
    const res = await fetch('https://cute-pear-sheep-slip.cyclic.app/posts');
    const Posts = await res.json();

    //INSERT THE FIRST FOUR CARDS
    let template = '';
    for (let index = 0; index <= 3; index++) {
        template += `
            <div class="card card-1">
                <p>1:00PM</p>
                <img src="${Posts[index].article_image}" class = "head_img" alt="Blog 1">
                <p class="descriptive-text">${Posts[index].body.slice(0, 15)}</p>
                <a href="/blogpage.html?id=${Posts[index]._id}" class="read-more">
                    <img src="images/Arrow.svg" alt="">
                    <span>Read More</span>
                </a>
            </div>
        `
    }

    //INJECT THE TEMPLATE IN HTML FILE
    container.innerHTML = template;
}


window.addEventListener('DOMContentLoaded',() => renderPostById());