import {homepage} from "./homepage.js";
import {about} from "./about.js";
import {contact} from "./contact.js";
import {menu} from "./menu.js";

//Page elements
const base = document.getElementById("content");

let header = document.createElement("header");
header.innerHTML = `
<div id="title-container">
    <h1 id="title">La Crème Glacée</h1>
</div>

<img id="img-banner" src="../imgs/abstractlarge.jpg">
`
;

let tabs = document.createElement("div");
tabs.id = "tabs";

//append whatever is imported to content div with id content or smth
let content = document.createElement("div");
content.id = "content-container";

//add classes to these divs, and add event listener to tab
let footer = document.createElement("footer");
footer.innerHTML = `
    <p>
    A project by<a href="https://github.com/emarjani" target="_blank">@emarjani</a>
    </p>
    `;
//add socials here maybe?


//initial load
header.appendChild(tabs);
base.appendChild(header);
base.appendChild(content);
base.appendChild(footer);


// add tabs to tab, and attach event listeners 
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

    //add tab to tabs
    tabs.appendChild(tab);

    //attach event listener to each tab
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

//with initial load, append homepage to content
content.appendChild(homepage());

