document.getElementById("btn-1").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Fix Button Issue" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})
document.getElementById("btn-2").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Optimize Home Page" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})

document.getElementById("btn-3").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Add Dark Mode" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})

document.getElementById("btn-4").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Add New Image" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})

document.getElementById("btn-5").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Integrate Open AI API" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})

document.getElementById("btn-6").addEventListener("click",function(event){
    event.preventDefault();
    let tarikh = new Date();
    currentDate = tarikh.toLocaleTimeString();
    let addedText = document.createElement("p");
    addedText.classList.add("bg-blue-300", "border", "rounded-md", "w-60", "p-2", "text-base", "poppins-regular");
    addedText.innerText = `You have Complete The Task "Improve Job Seraching" at ${currentDate}`;
      document.getElementById("logo-text").appendChild(addedText);
})