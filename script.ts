const toggleButton = document.getElementById("toggle-skills section") as HTMLElement
const skills = document.getElementById("Skills") as HTMLElement

toggleButton.addEventListener("click", () => {
    if(skills.style.display === "none"){
     skills.style.display = "block"
    } else{
        skills.style.display = "none"
    }
});