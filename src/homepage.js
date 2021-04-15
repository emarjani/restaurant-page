export {homepage}

const homepage = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");
    body.innerHTML = `

        <div class="quote">
            <p class="quote-body">"Exquisite ice cream, extravagent flavours"</p>
            <p class="author">-Paul Nelson, editor-in-chief of the "The Ice Cream Gazette"</p>
        </div>


        <div class="container-1">
            <p class="text">
            With both the "old standbys" ("incredible" cookies and cream) and more "interesting" scoops, these parlors "nail it", offering "creamy" housemade ice cream that's a "perfect balance of sweetness and strong flavor"; the simple setups include minimal seating, but Brooklyn has a few outdoor tables.
            </p>
            <img id="cone-img" src="../imgs/cone.PNG">
        </div>

        <div class="container-2">
        </div>
        
    `;
    return body;
};