let totalButtons = document.querySelectorAll(".btn").length;
let totalclicks = 0;

document.querySelectorAll(".btn").forEach(function(button){

   
    button.addEventListener("click",function(event){
        event.preventDefault();
        alert("board updated successfully");
        this.disabled = true;
        this.style.opacity = "0.5";
        let sum = parseInt(document.getElementById("nav-num").innerText);
        sum += 1;
        document.getElementById("nav-num").innerText = sum;
        let min = parseInt(document.getElementById("body-nums").innerText);
        min -= 1;
        document.getElementById("body-nums").innerText = min;
        totalclicks ++;
        if (totalclicks === totalButtons){
            alert("You have completed all the tasks")
        }
    })
})