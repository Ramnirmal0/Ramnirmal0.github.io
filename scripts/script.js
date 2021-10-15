// setup dashboard

var dp_dashboard=document.querySelector(".dp-dashboard");
var info_dashboard= document.querySelector(".info-dashboard");
dp_dashboard.innerHTML = `<img src="${dashboard.dp}" height="200" width="200px"/>`;
info_dashboard.innerHTML = `<h1>${dashboard.name}</h1><h4>${dashboard.title}</h4><P>Connect with</P>`
social_connect.map(item=>{
return info_dashboard.innerHTML += ` <a class="social-button" href="${item["social-link"]}"><i class="${item["social-icon"]}"></i><span class="social-icons">${item["social-title"]}</span></a> `
})

//about us

document.querySelector('#about-us').innerHTML = `<p>${dashboard.about}</p>`;

// freelance services
freelance_service.map(item=>{
return document.querySelector("#freelance-service").innerHTML += `<div class="service-container"><div><img src="${item.image}" height="200px" width="300px"/></div><div class="service-title">${item.title}</div><div class="service-content">${item.content}</div></div>`
});

//tech stack
techStack.map(item=>{
return document.querySelector('#tech-stack').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.icon}" title="${item.title}"/></a></div></div>`
});

//contribution
contribution.map(item=>{
    return document.querySelector('#contribution').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.logo}" height="50px" width="50px" title="${item.title}"/></a></div><div class="stack-title">${item.title}</div><div>Platform: ${item.platform}</div><br><button class="${item.status}" title="${item.message}">${item.status}</button></div>`
});

//notable-work
portfolio.map(item=>{
    return document.querySelector('#notable-work').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.image}" height="50px" width="50px" title="${item.title}"/></a></div><div class="stack-title">${item.title}</div></div>`
});

//research
research.map(item=>{
    return document.querySelector('#research').innerHTML += `<div class="stack-container"><div class="stack-logo"><img src="${item.image}" height="50px" width="50px" title="${item.title}"/></div><div class="stack-title">${item.title}</div><div>${item.desc}</div><br><button class="${item.status}">${item.status}</button></div>`
});

//publication
publication.map(item=>{
    return document.querySelector('#publication').innerHTML += `<div class="stack-container"><div class="publication_title"><i class="fas fa-book"></i> &nbsp;&nbsp; ${item.title}</div><br><div class="publication_desc">Publisher : ${item.publisher}</div><br><a class="pub_btn" href="${item.link}">View Paper</a></div><br> `
});

//startup-owned
startup.map(item=>{
    return document.querySelector('#startup-owned').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.logo}" height="50px" width="50px" title="${item.name}"/></a></div><div class="stack-title">${item.name}</div></div>`
});

//technical-writes
// tech_forum.map(item=>{
//     return document.querySelector('#tech-blog').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.logo}" height="50px" width="50px" title="${item.title}"/></a></div><div class="stack-title">${item.title}</div></div>`
// });

//social-profile
social_profile.map(item=>{
    return document.querySelector('#social-profiles').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><i id="social-Prof" class="${item.icon}" title="${item.title}"></i></a></div></div>`
});

document.querySelector('.footer').innerHTML = `<div>Ver.1.0.21</div><div>${copyrighted}</div><div>©2021</div>`