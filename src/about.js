export {about}

const about = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");
    body.id = "about";

    // two containers, one for desktop, one for mobile.

    body.innerHTML = `
    <div id="about-large">
        <div id="about-left-container">
            // images here
            <div class="img-frame frame-1" ></div>
            <div class="img-frame frame-2" ></div>
            <div class="img-frame frame-3" ></div>
            <div class="img-frame frame-4" ></div>
        </div>
        
        <div id="about-right-container">
            <h2 class="about-title"><span class="blue">Who</span> are we?</h2>

            <div class="about-info">
                <p>
                For over 50 years, <span class="blue">La Crème Glacée </span>has been serving <span class="blue">top quality</span> ice cream in the heart of New York City.
                Our philosophy is focused on serving texture-driven small-batch ice creams with a renewed attention to flavour.
                The <span class="blue">integrity</span> of our ingredients are <span class="blue">never compromised</span> with additives or processed stabilizing. 
                
                La Crème Glacée looks to change the way people eat and think about this nostalgic treat, by giving ice cream lovers
                an <span class="blue">entirely original</span> and <span class="blue">contemporary</span> ice cream experience.
                </p>
            </div>
        </div>
    </div>

    <div id="about-mobile">
        
        <div class="img-frame frame-2" ></div>
        <div class="img-frame frame-3" ></div>
        <div class="img-frame frame-4" ></div>

        <div class="text">
            <h2 class="about-title"><span class="blue">Who</span> are we?</h2>
            <p class="about-info">
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