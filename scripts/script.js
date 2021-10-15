// setup dashboard

var dp_dashboard=document.querySelector(".dp-dashboard");
var info_dashboard= document.querySelector(".info-dashboard");
dp_dashboard.innerHTML = `<img src="${dashboard.dp}" height="200" width="200px"/>`;
info_dashboard.innerHTML = `<h1>${dashboard.name}</h1><h4>${dashboard.title}</h4><P>Connect with</P>`
social_connect.map(item=>{
return info_dashboard.innerHTML += ` <a class="social-button" href="${item["social-link"]}'"><i class="${item["social-icon"]}"></i><span class="social-icons">${item["social-title"]}</span></a> `
})

//about us

document.querySelector('#about-us').innerHTML = `<p>${dashboard.about}</p>`;

// freelance services
freelance_service.map(item=>{
return document.querySelector("#freelance-service").innerHTML += `<div class="service-container"><div><img src="${item.image}" height="200px" width="200px"/></div><div class="service-title">${item.title}</div><div class="service-content">${item.content}</div></div>`
});

//tech stack
techStack.map(item=>{
return document.querySelector('#tech-stack').innerHTML += `<div class="stack-container"><div class="stack-logo"><a href="${item.link}"><img src="${item.icon}" title="${item.title}"/></a></div><div class="stack-title">${item.title}</div></div>`
});