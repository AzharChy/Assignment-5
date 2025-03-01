document.getElementById("nav-btn").addEventListener("click",function(event){
    event.preventDefault();
    let colors = ["orange", "blue", "pink", "black", "red"];
    let randomColor = Math.floor(Math.random() * colors.length);
    document.querySelector(".body").style.backgroundColor = colors[randomColor];

})