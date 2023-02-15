let menu = document.querySelector("#menu");
let hamburger = document.querySelector("#menu-btn");
let darkBtn= document.querySelector("#dark-one");
let darkTwo= document.querySelector("#dark-two");
let body = document.querySelector("body");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("open-btn");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
})


darkBtn.addEventListener("click", function(){
  body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    darkBtn.src = "images/sun.png"
  } else{
    darkBtn.src = "images/moon.png"
  }
  
});

darkTwo.addEventListener("click", function(){
  body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    darkTwo.src = "images/sun.png"
  } else{
    darkTwo.src = "images/moon.png"
  }
  
});

