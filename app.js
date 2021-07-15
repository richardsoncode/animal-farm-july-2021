// import functions
const catPic = document.getElementById("cat-pic");
const dogPic = document.getElementById("dog-pic");
const horsePic = document.getElementById("horse-pic");
const catSound = document.getElementById("cat-sound");
const dogSound = document.getElementById("dog-sound");
const horseSound = document.getElementById("horse-sound");
const header = document.getElementById("header");

// reference needed DOM elements
console.log(catSound)

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
  catPic.addEventListener('click', () => {
catSound.play();
header.textContent = "Cat"
  })

  dogPic.addEventListener('click', () => {
    dogSound.play();
    header.textContent = "Dog"
      })

      horsePic.addEventListener('click', () => {
        horseSound.play();
        header.textContent = "Horse"
          })
  