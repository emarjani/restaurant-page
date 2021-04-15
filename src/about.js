export {about}

const about = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");

    //add img here maybe
    body.innerHTML = `


    <div id="about-container">
        <h2 id="about-title">Who are we?</h2>

        <div id="about-info">
            <img id="about-img" src="../imgs/parlor.jpg">

            <p>
            For over 50 years, La Crème Glacée has been serving top quality ice cream in the heart of New York City.
            Our philosophy is focused on serving texture-driven small-batch ice creams with a renewed attention to flavour.
            The integrity of our ingredients are never compromised with additives or processed stabilizing. 
            “Each ice cream is made with the flavor profile in mind first.”
            La Crème Glacée looks to change the way people eat and think about this nostalgic treat, by giving ice cream lovers
            an entirely original and contemporary ice cream experience.
            </p>
        </div>
    </div>

    `;
    return body;
};