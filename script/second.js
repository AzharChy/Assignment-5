document.getElementById("second-btn").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "index.html"
})

function toggleFAQ(id) {
    let answer = document.getElementById(id);
    answer.classList.toggle("hidden");
}