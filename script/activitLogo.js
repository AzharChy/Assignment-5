
let bonousDate = new Date();
let options = {
  weekday : 'short',
  day: '2-digit',
  month:'long',
  year: 'numeric'
};
let currentDate = bonousDate.toLocaleDateString('en-GB', options);

document.getElementById("main-date").innerText = `${currentDate}`;

document.querySelectorAll(".btn").forEach(function(button){
  button.addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();

    let taskName = this.getAttribute("data-task")

    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText =  `You have Completed The Task "${taskName}" at ${currentDate}`;

    document.getElementById("logo-text").appendChild(addedText);
  })
})

document.getElementById("clr-history").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("logo-text").innerHTML = "";
})