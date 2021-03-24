# phase3BB


// 1. Setting a Fetch
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

// 2. Creating the variables 
//At some point early on i will need to create variables that will 
//  grab the elements i'm going to want to modify with db info
//      querySelector() is a good method to use to grab HTML element
//      either assign ID to HTML element or use class (in html.index)
//        

//3. Adding likes to like counter 
//  3a We will need to add an eventLlistener to the like button to rack up likes when user clicks
//      remember that eventListener takes two arguments:
//          ("event to listen for", (event) => {} )
//  3b In order to up the count, we can add an incrementor (++) via .textContent
//          to the element that holds the likes
//      Another (preferred) method we can use is parseInt(), wrapping it around the textContent
//          which will turn it into integer, then add a +1   
//        If we use parseInt, be sure to set the formula to a new variable (use LET, as variable value will change),
//          and then set the textContent to that new variable. This keeps the count stable 
//          We can then use that variable in the body of our PATCH request 

//4. Using PATCH 
//PATCH allows us to modify db so the changes we make at endpoint persist 
//  4a the syntax requires:
//      creating the fetch line 
//      a method ("PATCH")  
//      headers wrapped in curly bois
//      body - where data gets stringify-ed and we point to where 
//          we are trying to update in db
//  be sure to use commas to separate things 

//5. Persisting new comments on the comment form 
//  5a First we want to tie the form element to a new variable we can use (2)
//  5b Then, we will add an event listener in the pile of fetch functions, outside of the PATCH     
//      Remember that the eventListener action takes 2 arguments! 2nd arg will be the function/action
//      Also remember to add a preventDefault action to stop form from refreshing page 
//  5c use formData action:
//      setup variable to hold the form data
//      use "new FormData" class/object to pass in event target info 
//          this can be a good place to drop a console log to see the form data that gets passed 
//              (use newly created variable in console log to see what's grabbed)
//      
//  