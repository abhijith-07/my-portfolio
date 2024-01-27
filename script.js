let cursor = document.querySelector(".cursor")
let projects = document.querySelectorAll(".project")
let i = 0

// Cursor
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top =  e.clientY + "px";
})

// Projects Hovering
projects.forEach((proj)=>{
    proj.addEventListener("mouseover", ()=>{
        let project = document.getElementById(`${proj.id}`)
        let saturationValue = 0;

        let saturationInterval = setInterval(() => {
        if (saturationValue < 1.3) {
            saturationValue += 0.04;
            project.style.filter = `saturate(${saturationValue})`;
        }
        else {clearInterval(saturationInterval);}
        }, 10);
    })

    proj.addEventListener("mouseout", ()=>{
        let project = document.getElementById(`${proj.id}`)
        let saturationValue = 1.2;

        let saturationInterval = setInterval(() => {
        if (saturationValue > 0) {
            saturationValue -= 0.04;
            project.style.filter = `saturate(${saturationValue})`;
        }
        else {clearInterval(saturationInterval);}
        }, 10);
    })
})
