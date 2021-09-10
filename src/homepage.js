export {homepage}

const homepage = () => {
    let body = document.createElement("div");

    //add shapes manually to body.
    let shape_number = 7;


    body.setAttribute("class", "content-body");
    body.id = "homepage";
    body.innerHTML = `

        <div class="quote">
            <p class="quote-body">"Exquisite ice cream, extravagant flavours"</p>
            <p class="author">-Paul Nelson, editor-in-chief of the "The Ice Cream Gazette"</p>
        </div>

        <div class="section-1">
            <p class="text">
            Your one stop shop for homemade artisanal, organic, natural, sweet and delicious ice cream.
            Our tasty frozen treats continue to spark lines of devoted fans and ice cream connoisseurs.
            World class ice cream, freshly served in the bustling heart of New York City.
            La Crème Glacée invites you to come and indulge in the ultimate ice cream experience.

            </p>
            <img id="cone-img" src="../imgs/cone.PNG">
        </div>
        
    `;

    // for (let i=0; i < shape_number; i++) {
    //     let shape = document.createElement("div");
    //     shape.id = `shape-${i+1}`
    //     shape.className = "shape"
    //     body.appendChild(shape);
    // }

    return body;
};