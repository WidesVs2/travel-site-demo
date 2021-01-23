document.getElementById("showcase").classList.add('hidden');
document.getElementById("overlay").classList.add('hidden');
document.getElementById("logo").classList.add("green");
let content = document.getElementById("content");

content.innerHTML = `
    <div id="blog-head" class="blog-head">
        <h1 class="blog-head-text">Travel blog</h1>
        <p class="blog-greeting">Catch up with awesome travel Blogs!</p>
    </div>
    <div id="blogs"></div>
`;



const getblog = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data);

            

            let blogs = document.getElementById("blogs");
            let blogsFoot = document.getElementById("blogs-foot");
            
            blogs.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                blogs.innerHTML += createHtml(data, i);
                
            }
            blogsFoot.innerHTML = ``;
        }
    );
}

getblog();

const createHtml = (objJson, i) => {
    let html = `
        <div id="blog-${i}" class="blog">
                <h3 class="blog-title">${objJson[i].title}</h3>
                <p class="blog-body">${objJson[i].body}</p>
        </div>
    `;
    return html;
}

