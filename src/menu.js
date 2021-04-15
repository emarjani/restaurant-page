export {menu}
import {slideshow} from "./slideshow.js"


let img_paths = [
    "../imgs/pandan.PNG",
    "../imgs/raspberry.PNG",
    "../imgs/peach_marmalade.PNG",
    "../imgs/butterscotch.PNG",
    "../imgs/cashew.PNG"
];

const menu = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");

    let menu_content = document.createElement("div");
    menu_content.id = "menu-content";

    // appending content
    menu_content.appendChild(slideshow(img_paths));
    menu_content.insertAdjacentHTML("beforeend", `    
    <h2>Flavour list</h2>
    <ul>
        <li>
            <div class="info">
                <p class="title">Raw Milk</p>
                <p class="description">The all-time classic: milk, cream sugar and salt.</p>
            </div>
            <p class="price">$4</p>
        </li>
        <li>
            <div class="info">
                <p class="title">S&P</p>
                <p class="description">Salt and pepper ice cream, with toasted pine nuts.</p>
            </div>
            <p class="price">$5</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Blueberries 'N Cream</p>
                <p class="description">Blueberry jam rolled into our Raw Milk ice cream</p>
            </div>
            <p class="price">$6</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Almond Joy</p>
                <p class="description">Sweet Coconut ice cream with an almond chocolate dip.</p>
            </div>
            <p class="price">$6</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Cherry Bomb</p>
                <p class="description">Rich cherry ice cream, mixed with milk chocolate chips.</p>
            </div>
            <p class="price">$6</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Loco Choco</p>
                <p class="description">Dark chocolate ice cream, with oreo crumbs and milk chocolate shavings.</p>
            </div>
            <p class="price">$6</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Le Citron Vert</p>
                <p class="description">Lime flavoured ice cream, infused with sea salt.</p>
            </div>
            <p class="price">$7</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Banana Agave</p>
                <p class="description">Vegan banana ice cream, made with coconut milk and agave</p>
            </div>
            <p class="price">$7</p>
        </li>
    </ul>
    `);

    body.appendChild(menu_content);
    return body;
};










/* <div id="featured-imgs">
        <div class="featured-item">
            <img src="../imgs/raspberry.PNG">
            <p>Raspberry</p>
        </div>
        <div class="featured-item">
            <img src="../imgs/peach_marmalade.PNG">
            <p>Peach Marmalade</p>
        </div>
        <div class="featured-item">
            <img src="../imgs/raspberry.PNG">
            <p>Coffee Crisp</p>
        </div>
    </div> */