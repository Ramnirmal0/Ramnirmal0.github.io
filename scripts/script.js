// setup dashboard

var dp_dashboard=document.querySelector(".dp-dashboard");
var info_dashboard= document.querySelector(".info-dashboard");
dp_dashboard.innerHTML = `<img src="${dashboard.dp}" height="200" width="200px"/>`;
info_dashboard.innerHTML = `<h1>${dashboard.name}</h1><h4>${dashboard.title}</h4><P>Connect with</P>`
social_connect.map(item=>{
return info_dashboard.innerHTML += ` <a class="social-button" href="${item["social-link"]}'"><i class="${item["social-icon"]}"></i><span class="social-icons">${item["social-title"]}</span></a> `
})