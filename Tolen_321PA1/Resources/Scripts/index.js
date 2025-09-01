let projects = [
    {
        img: "./Resources/img/denny_chimes.jpg",
        title: "Experience/Education",
        description: "Click the button below to learn more about Mr. Tolen's work experience and education.",
        url: "#experience",
        buttonText: "Experience/Education"
    },
    {
        img: "./Resources/img/headshot.jpg",
        title: "About J.W.",
        description: "Click the button below to learn more about Mr. Tolen's personal information.",
        url: "#personal",
        buttonText: "About"
    },
    {
        img: "./Resources/img/phone1.jpg",
        title: "Contact Us!",
        description: "Click the button below to get in touch with Mr. Tolen and TolenTech.",
        url: "#contact",
        buttonText: "Contact"
    },
]

let loadProjects = function(){
    let html = `<div class="row justify-content-center">`
    projects.forEach(function(project){
        html += `
            <div class="card m-5 text-center" style="width: 18rem;">
            <img src="${project.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.url}" class="btn btn-primary">${project.buttonText}</a>
                </div>
            </div>
        `
    })
    html += "</div>"
    document.getElementById("cards").innerHTML = html
}

function handleOnLoad(){
    loadProjects()
}