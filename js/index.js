// // Your code goes here
//  document.querySelectorAll(".btn")
// button.addEventListener("click", (el) =>{
// el.style.backgroundColor = "yellow"
// });
document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("click", () => {
        element.style.backgroundColor="pink"
        // if there r few its better to use for each to go around
    })
    
});
const body =document.querySelector("body")
body.addEventListener("dblclick", (event) =>{
   body.style.backgroundColor ="teal";

})
// const funb =document.querySelectorAll(".nav")
// funb.addEventListener("mouseenter" , function(){
// funb.style.color="pink";

// })
const mapPic =document.querySelector(".img-content")
mapPic.addEventListener("mouseenter", function(){
    mapPic.style.transform = "scale(2)";
    mapPic.style.transition = "transform 2s";
  })
  mapPic.addEventListener("mouseleave", function(){
    mapPic.style.transform = "scale(1)";
  })
//   const htwo =document.querySelectorAll("h2")

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(link =>{
    link.addEventListener("mouseover",(event)=> {
        event.target.style.backgroundColor= "yellow";
        event.stopPropagation();
    }) 
})

const logo =document.querySelector("h1")
logo.addEventListener("select", (event) => {
    alert("hello")

})

const allPic =document.querySelectorAll(".img-content")
allPic.forEach((event) =>{
    event.addEventListener("contexmenu",(event)=>{
        event.target.style.border = "5px solid red";
    })
})



