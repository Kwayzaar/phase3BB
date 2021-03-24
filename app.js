// Run command in terminal: npm install -g json-server
// Then run server with: json-server --watch db.json

const baseURL = "http://localhost:3000/movies/1"

const movieTitle = document.querySelector('#movie-title')
const movieImage = document.querySelector('#movie-image')
const movieLikes = document.querySelector('#like-count')
const movieReviews = document.querySelector('.reviews')


fetch(baseURL)
    .then(response => response.json())
    .then(movie => {
        movieTitle.textContent = movie.title
        movieImage.src = movie.image
        movieLikes.textContent = movie.likes        
    })




/* <body>
  <!-- <div id="movieList"></div> -->
  <article class="movie-card">
    <img src="" alt="image goes here" id="movie-image" />
    <h3 id="movie-title">Movie Title Goes Here</h3>
    <div class="row">
      <p>Likes: <span id="like-count">0</span></p>
      <button id="like-button">👍</button>
    </div>
    <form id="new-review">
      <input type="text" name="content" />
      <input type="submit" value="Add Review" />
    </form>
    <ul class="reviews"></ul>
  </article>
  <script src="app.js"></script>
</body> */


///////////////////
//Damon's method//
/////////////////

// 1.
// const baseURL = "http://localhost:3000/movies/3"

// //2.
// const movieCard = document.querySelector(".movie-card")
// const movieTitle = document.querySelector("#movie-title")
// const movieImage = document.querySelector("#movie-image")
// const movieLikes = document.querySelector("#like-count")
// const movieReviews = document.querySelector(".reviews")
// const likeButton = document.querySelector("#like-button")
// const commentForm = document.querySelector("#new-review")

// // 1. 
// fetch (baseURL)  //1b
//     .then(response => response.json()) //1b.a
//     .then(movie => {  //1b.b
//         movieTitle.textContent = movie.title
//         movieImage.src = movie.image
//         movieLikes.textContent = movie.likes
//         movie.reviews.forEach(review =>{     //1b.c
//             const li = document.createElement('li')
//             li.textContent = review.content
//             movieReviews.append(li)    
//         })
        
//         //3.
//         likeButton.addEventListener("click", (event) => { //3a
//             let newLikeCount = parseInt(movieLikes.textContent) + 1 //3b
            
//             movieLikes.textContent = newLikeCount
                        
//             //4.
//             fetch(baseURL, {
//                 method: "PATCH", //4a
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     likes: newLikeCount
//                 })
//             })
//         })
//         //5.
//         commentForm.addEventListener('submit', (event) => {
//             event.preventDefault()
//             const formData = new FormData(event.target)  
//             const content = formData.get('content')
           
//         })

//     })






/////////////
//Marc's BB//
/////////////
// const movieURL = 'http://localhost:3000/movies/';
// const movieElement = document.getElementById("movieList")

// fetch(movieURL)
//     .then(response => response.json())
//     .then(displayMovies);

// function displayMovies(movieList) {
//     movieList.forEach(movie =>{
//         displayMovie(movie)
//     })
// }

// function displayMovie(movie) {
//     console.log('displaying movie', movie)
//     //create a card
//     //fill with data
//     //display on page
    
//     const card = document.createElement('article')
//     card.classList.add('movie-card')
//     card.innerHTML = `
//     <img src=`
    
//     card.innerText = 'hi there'

//     const image = document.createElement('img')
//     image.src = movie.image
//     card.append(image)

//     const title = document.createElement('h3')
//     title.textContent=movie.title;
//     card.append(title);

//     const reviews = document.createElement('ul')
//     reviews.classList.add('reviews')
//     movies.reviews.forEach(rev => {
//         const rel = document.createElement('li')
//         rel.innerText = rev.content
        
//     })


//     movieList.append(card);
// }






