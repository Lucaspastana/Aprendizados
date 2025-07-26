const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingelement = document.querySelector('#loading')
const containerPost = document.querySelector('#posts-container')

async function getAllposts() {
    const response = await fetch(url)

    console.log(response)

    const data = await response.json();
    console.log(data);

    loadingelement.classList.add("hide");
    
    data.map((post)=>{
      const div = document.createElement("div")
      const title = document.createElement("h2")
      const body = document.createElement("p")
      const link = document.createElement("a")

      title.innerText= post.title
      body.innerText= post.body
      link.setAttribute('href', `/post.html?id=${post.id}`)

      div.appendChild(title)
      div.appendChild(body)
      div.appendChild(link)

      containerPost.appendChild(div);

    })
}

getAllposts()