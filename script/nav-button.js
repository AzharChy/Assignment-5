document.getElementById("nav-btn").addEventListener("click",function(event){
    event.preventDefault();
    let colors = ["orange", "blue", "pink", "white", "black", "red"];
    let randomColor = Math.floor(Math.random() * colors.length);
    document.querySelector(".container").style.backgroundColor = colors[randomColor];

})