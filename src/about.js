export {about}

const about = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");

    body.innerHTML = `
    
    <div id="about-container">
        <h2 id="about-title"><span class="blue">Who</span> are we?</h2>

        <div id="about-info">
            <img id="about-img" src="../imgs/place.jpeg">

            <p>
            For over 50 years, <span class="blue">La Crème Glacée </span>has been serving <span class="blue">top quality</span> ice cream in the heart of New York City.
            Our philosophy is focused on serving texture-driven small-batch ice creams with a renewed attention to flavour.
            The <span class="blue">integrity</span> of our ingredients are <span class="blue">never compromised</span> with additives or processed stabilizing. 
            
            La Crème Glacée looks to change the way people eat and think about this nostalgic treat, by giving ice cream lovers
            an <span class="blue">entirely original</span> and <span class="blue">contemporary</span> ice cream experience.
            </p>
        </div>
    </div>

    `;
    return body;
};