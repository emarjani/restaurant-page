import {homepage} from "./homepage.js";
import {about} from "./about.js";
import {contact} from "./contact.js";
import {menu} from "./menu.js";

//Page elements
const base = document.getElementById("content");

let header = document.createElement("header");
header.id = "header"
header.className = "content-body"
header.innerHTML = `

<div id="side-container">
    <div id="title-container">
        <h1 id="title">La Crème Glacée</h1>
    </div>

    <p>Your one stop shop for homemade artisanal, organic, natural, sweet and delicious ice cream.
    We invite you to come and indulge in the ultimate ice cream experience.
    </p>
</div>

<img id="icecream-cone" src="../imgs/ice-cream-cone-stroke-color-by-Vexels.png">

<img id="img-banner" src="../imgs/abstractlarge.jpg">
`
;

//NAVBAR

const navbar = document.createElement("div");
navbar.id = "navbar";


const header_link = document.createElement("a");
header_link.href = "#header";
header_link.textContent = "Header";

// const home_link = document.createElement("a");
// home_link.href = "#homepage"
// home_link.textContent = "Home";

const menu_link = document.createElement("a");
menu_link.href = "#menu";
menu_link.textContent = "Menu";

const about_link = document.createElement("a");
about_link.href = "#about";
about_link.textContent = "About";


const contact_link = document.createElement("a");
contact_link.href = "#contact";
contact_link.textContent = "Contact";



navbar.appendChild(header_link);
// navbar.appendChild(home_link);
navbar.appendChild(menu_link);
navbar.appendChild(about_link);
navbar.appendChild(contact_link);


let tabs = document.createElement("div");
tabs.id = "tabs";

let content = document.createElement("div");
content.id = "content-container";

let footer = document.createElement("footer");
footer.innerHTML = `
    <p>
    </p>
    `;

let tab_names = {
    "homepage": homepage(),
    "about": about(),
    "menu": menu(),
    "contact": contact()
};

Object.entries(tab_names).forEach(function([key,value]) {

    let tab = document.createElement("a");
    tab.setAttribute("id", `${key}`);
    tab.setAttribute("class", "tab");
    tab.innerHTML = `${key.toLowerCase()}`;
    tabs.appendChild(tab);

    tab.addEventListener("click", function() {
        content.innerHTML = "";
        content.appendChild(value);

        //change tab colors
        for (let i=0; i < tabs.childNodes.length; i++ ) {
            tabs.childNodes[i].style.backgroundColor ="rgb(233, 232, 232)";
        }
        tab.style.backgroundColor = "white";
    });
});


// header.appendChild(tabs);
base.appendChild(navbar);
base.appendChild(header);
// base.appendChild(homepage());
base.appendChild(menu());
base.appendChild(about());
base.appendChild(contact());
base.appendChild(footer);


