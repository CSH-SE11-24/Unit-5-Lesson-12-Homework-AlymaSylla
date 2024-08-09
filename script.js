console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)
let buttons = document.querySelectorAll("button")
// Extra credit: Select the navbar
let navbar = document.querySelector(".navbar-brand")
// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
  buttons[0].addEventListener("click", function(event){
    buttons[0].style.backgroundColor = "white"
    buttons[0].style.color = "black"
  })
    
      
  
// Extra credit: Add the bkg-light class and remove the bg-dark class to the navbar



// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
buttons[1].addEventListener("click",function(event){
  buttons[1].style.backgroundColor = "black"
  buttons[1].style.color = "white"
})
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar



// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let images = document.getElementsByClassName("card-img-top rounded")

// Console log the length of the array to confirm you have all 4 images
console.log(images.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg

  images[0].addEventListener("mouseover",function(event){
    images[0].src = "images/ears1.gif"
    images[0].addEventListener("mouseout",function(event){
      images[0].src = "images/ears.jpg"
      images[1].addEventListener("mouseover",function(event){
        images[1].src = "images/halp.gif"
        images[1].addEventListener("mouseout",function(event){
          images[1].src = "images/halp.png"
          images[2].addEventListener("mouseover",function(event){
            images[2].src = "images/husky.gif"
            images[2].addEventListener("mouseout",function(event){
              images[2].src = "images/husky.jpg"
              images[3].addEventListener("mouseover",function(event){
                images[3].src = "images/dance.gif"
              images[3].addEventListener("mouseout",function(event){
                images[3].src = "images/dance.jpg"
              })
              })
            })
          })
        })
      })
    })
  })
    
 

// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


