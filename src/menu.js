export {menu}
import {slideshow} from "./slideshow.js"


let img_paths = [
    //IMG PATH AND CAPTION
    ["../imgs/pandan.PNG", "Green Isle"],
    ["../imgs/raspberry.PNG", "Berry Blast"],
    ["../imgs/peach_marmalade.PNG", "Peach Marmalade"],
    ["../imgs/chocolate.PNG", "Loco Choco"],
    ["../imgs/cashew.PNG", "Nutty"],
    ["../imgs/apricot.PNG", "Sunset Avenue"],
    ["../imgs/durian.PNG", "Durian"]
];

const menu = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");
    body.id = "menu";

    let menu_content = document.createElement("div");
    menu_content.id = "menu-content";

    const menu_text_1 = document.createElement("p");
    menu_text_1.id = "menu-text-1";
    menu_text_1.className = "menu-text";
    menu_text_1.textContent = "MENU";


    const menu_text_2 = document.createElement("p");
    menu_text_2.id = "menu-text-2";
    menu_text_2.className = "menu-text";
    menu_text_2.textContent = "FLAVOUR LIST";

    body.appendChild(menu_text_1);
    body.appendChild(menu_text_2);


    menu_content.appendChild(slideshow(img_paths));
    menu_content.insertAdjacentHTML("beforeend", `    
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
                <p class="title">Loco Choco</p>
                <p class="description">Dark chocolate ice cream, topped with oreo crumbs and milk chocolate shavings.</p>
            </div>
            <p class="price">$5</p>
        </li>
        
        <li>
            <div class="info">
                <p class="title">Berry Blast</p>
                <p class="description">Fresh raspberry and strawberry ice cream</p>
            </div>
            <p class="price">$5</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Sir Buttersworth</p>
                <p class="description">Classic butterscotch ice cream, how splendid!</p>
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
                <p class="title">Nutty</p>
                <p class="description">Buttery-smooth cashew ice cream</p>
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
                <p class="title">Durian</p>
                <p class="description">The king of fruit, packed into a single scoop</p>
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
                <p class="title">Green Isle</p>
                <p class="description">A tropical blend of pandan and coconut ice cream.</p>
            </div>
            <p class="price">$6</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Sunset Avenue</p>
                <p class="description">Our signature apricot ice cream</p>
            </div>
            <p class="price">$7</p>
        </li>
        <li>
            <div class="info">
                <p class="title">Citron Vert</p>
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
        <li>
            <div class="info">
                <p class="title">Peach Marmalade</p>
                <p class="description">Citrusy sweet peach marmalade</p>
            </div>
            <p class="price">$7</p>
        </li>
    </ul>
    `);

    body.appendChild(menu_content);
    return body;
};