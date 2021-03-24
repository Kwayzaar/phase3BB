// 1.
//First thing we can do is setup the fetch 
//  baseURL is a good const to set db url to
//  after constant is created, add the fetch process:
//      add the function that parses the response 
//          it can be good to add a console.log after the response parse
//          to ensure the data is being pulled, just get rid of it after            
//      add the function that will replace html elements with db info
//          use the variables created in #2 to point to element i want modified
//          add a .textContent, which will start to write to HTML element
//          set the above two equal to the data i want to replace with 
//          do this for every element that i need to change (should be the same number
//              of variables i've created)


//At some point early on i will need to create variables that will 
//  grab the elements i'm going to want to modify with db info
//      querySelector() is a good method to use to grab HTML element
//      either assign ID to HTML element or use class (in html.index)
//        


// 1.
const baseURL = "http://localhost:3000/movies/3"

//2.
const movieCard = document.querySelector(".movie-card")
const movieTitle = document.querySelector("#movie-title")
const movieImage = document.querySelector("#movie-image")

fetch (baseURL)
    .then(response => response.json())
    .then(movie => {
        movieTitle.textContent = movie.title
        movieImage.src = movie.image
    })


