// 1.
//First thing we can do is setup the fetch 
//  1a. baseURL is a good const to set db url to
//  1b. after constant is created, add the fetch process:
//      1b.a add the function that parses the response 
//              it can be good to add a console.log after the response parse
//              to ensure the data is being pulled, just get rid of it after            
//      1b.b add the function that will replace html elements with db info
//              use the variables created in #2 to point to element i want modified
//              add a .textContent, which will start to write to HTML element
//              set the above two equal to the data i want to replace with 
//              do this for every element that i need to change (should be the same number
//                  of variables i've created)
//      1b.c when dealing with arrays to populate list items, use a .forEach() function
//              the forEach() will start a whole new function, and const will need to be 
//                  created to create li items (basically process starts over at 2->1b.b)
//              we will need to insert data into li items using .textContent
//              in this example, li items need to be appended to ul, since they don't exist
//                  already 

// 2.
//At some point early on i will need to create variables that will 
//  grab the elements i'm going to want to modify with db info
//      querySelector() is a good method to use to grab HTML element
//      either assign ID to HTML element or use class (in html.index)
//        

//3. 
//Adding likes to like counter 
//  3a We will need to add an eventLlistener to the like button to rack up likes when user clicks
//      remember that eventListener takes two arguments:
//          ("event to listen for", (event) => {} )
//  3b In order to up the count, we can add an incrementor (++) via .textContent
//          to the element that holds the likes
//      Another method we can use is parseInt(), wrapping it around the textContent ar
//          which will turn it into integer, then add a +1   

// 1.
const baseURL = "http://localhost:3000/movies/3"

//2.
const movieCard = document.querySelector(".movie-card")
const movieTitle = document.querySelector("#movie-title")
const movieImage = document.querySelector("#movie-image")
const movieLikes = document.querySelector("#like-count")
const movieReviews = document.querySelector(".reviews")
const likeButton = document.querySelector("#like-button")


// 1. 
fetch (baseURL)  //1b
    .then(response => response.json()) //1b.a
    .then(movie => {  //1b.b
        movieTitle.textContent = movie.title
        movieImage.src = movie.image
        movieLikes.textContent = movie.likes
        movie.reviews.forEach(review =>{     //1b.c
            const li = document.createElement('li')
            li.textContent = review.content
            movieReviews.append(li)    
        })
        
        //3.
        likeButton.addEventListener("click", (event) => { //3a
            movieLikes.textContent = parseInt(movieLikes.textContent) + 1
            console.log("clicked")
        })
    })


