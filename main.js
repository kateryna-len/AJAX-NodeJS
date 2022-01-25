const postList = document.querySelector(".posts_list")
const getPostBtn = document.querySelector(".posts_get-posts")
const state = {
  posts: []
}

const createPost = (post) => `
<div class="post">
<h1 class="wrapper-title">User id: ${post.id} </h1>
<p class="wrapper-body"> Name: ${post.first_name}</p>
<p class="wrapper-body"> Lastname: ${post.last_name}</p>
<p class="wrapper-body"> Email: ${post.email}</p>
<img src="${post.photo}" alt="">
</div>`

const fillPostList = (posts) => {
  postList.innerHTML = ""
  if (posts.length) {
    posts.forEach((post) => postList.innerHTML += createPost(post))
  }
}

getPostBtn.addEventListener('click', async () => {
  await getPostsRequest()
  fillPostList(state.posts)

})

function getPostsRequest() {
  return fetch('./users.json', {
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((posts) => state.posts = state.posts.concat(posts))
}


