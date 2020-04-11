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


