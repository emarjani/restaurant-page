export {contact}

const contact = () => {
    let body = document.createElement("div");
    body.setAttribute("class", "content-body");
    body.innerHTML = `

    <div class="contact-container">
        <div class="info">

            <div class="address-info">
                <img class="icon" src="../imgs/icons/iconfinder_map-marker_299087.png">
                <h3 class="address">137 1st Avenue NYC</h3>
            </div>
            
            <div class="contact-info">
                
                <div>
                    <img class="icon" src="../imgs/icons/iconfinder_mail-letter-offer_2931172.png">
                    <p>contact@lacremeglacee.com</p>
                </div>

                <div>
                    <img class="icon" src="../imgs/icons/iconfinder_multimedia-01_2849835.png">
                    <p>(212) 211-8864 </p>
                </div>
            </div>

            <div class="socials-info">
            
                <div>
                    <img class="icon" src="../imgs/icons/iconfinder_38-instagram_1161953.png">
                    <p>@lacremeglacee</p>
                </div>
                <div>
                    <img class="icon" src="../imgs/icons/iconfinder_twitter_bird_social_media_trending_5340249.png">
                    <p>@lacremeglacee</p>
                </div>
            </div>
        </div>

        <div id="google-maps">
            <img src="../imgs/map.png">
        </div>
    </div>

    `;
    return body;
};