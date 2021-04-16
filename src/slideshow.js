export {slideshow}

//add dots and maybe captions? have to process captions then
const slideshow = (img_paths) => {

    let index = 0;
    let gallery = createGallery(img_paths);
    let gallery_buttons = createGalleryButtons(gallery);
    let button_array = Array.from(gallery_buttons.children);

    //Functions

    const getIndex = (i) => {
        switch (i) {
            case (-1):
                return gallery.length -1;
                break;
            case (gallery.length):
                return 0;
                break;
            default:
                return i;
        }
    };

    //maybe rename this to moveone slide or smth
    const changeSlide = (num) => {
        index = getIndex(index + num);
        changeButtonColors(index);
        frame.innerHTML = "";
        frame.appendChild(gallery[index]);
    };
    
    const swipe = (() => {
        let repeat;
        const start = () => {
            repeat = setInterval(function(){changeSlide(1)}, 5000);
        };
        //makes sure the interval timer gets reset with each button click;
        const reset = () => {
            clearInterval(repeat);
            start();
        };
        return {start, reset}
    })();

    //to grab button index from child/parent node of gallery button
    const getButtonIndex = (button) => {
        return Array.from(button.parentNode.children).indexOf(button);
    };

    //pass in index of image slide, subsequently change specific button color
    const changeButtonColors = (index) => {
        button_array.forEach(other_button => {other_button.style.backgroundColor = "rgb(212, 212, 212)"});
        button_array[index].style.backgroundColor = "rgb(136, 136, 136)";
    };



    // CREATE ELEMENTS

    let body = document.createElement("div");
    body.setAttribute("class", "slideshow");

    //frame, caption, buttons (prev/nextt)
    let container_1 = document.createElement("div");
    container_1.setAttribute("class", "container-1");

    //circle buttons
    let container_2 = document.createElement("div");
    container_2.setAttribute("class", "container-2");

    // _________________________________

    let frame = document.createElement("div");
    frame.setAttribute("class", "frame");
    frame.appendChild(gallery[index]);

    //setting up buttons
    let prev_button = document.createElement("button");
    prev_button.setAttribute("class", "prev");
    prev_button.innerHTML = "<";

    let next_button = document.createElement("button");
    next_button.setAttribute("class", "next");
    next_button.innerHTML = ">";

    // _________________________________

    // EVENT LISTENERS

    //event listeners for slide changes 
    prev_button.addEventListener("click", function() {
        changeSlide(-1);
        swipe.reset();
    });

    next_button.addEventListener("click", function(){ 
        changeSlide(1);
        swipe.reset();
    });

    //event listeners for gallery buttons 
    button_array.forEach(button => {
        button.addEventListener("click", function() {
            index = getButtonIndex(button);
            changeButtonColors(index);

            //logic to switch tab based on gallery/button index
            frame.innerHTML = "";
            frame.appendChild(gallery[index]);
            swipe.reset();
        });
    });

    
    //is there a more concise way of doing this?

    //append caption to frame later
    container_1.appendChild(prev_button);
    container_1.appendChild(frame);
    container_1.appendChild(next_button);

    container_2.appendChild(gallery_buttons);

    body.appendChild(container_1);
    body.appendChild(container_2);

    //Set up auto swipe
    swipe.start();

    //set intial button color
    changeButtonColors(index);

    //return entire slideshow
    return body;
};


//probably make this more concise later

//if you want to add caption, it needs to attach to each gallery info.
//something like <div class=gallery item><img><p>caption</p></div>

//this returns an ARRAY of img objects NODES
function createGallery(img_paths) {
    let gallery = [];
    for (let i=0; i < img_paths.length; i++) {
        let slide = document.createElement("img");
        slide.setAttribute("src", `${img_paths[i]}`);
        gallery.push(slide);
    };
    //array of img objects
    return gallery;
}

//this returns a NODE with CHILD NODES that are buttons
function createGalleryButtons(gallery) {
    //button should have id corresponding to index of gallery img
    let gallery_buttons = document.createElement("div");
    gallery_buttons.setAttribute("class", "gallery-buttons");

    for (let i=0; i < gallery.length; i++) {
        let button = document.createElement("button");
        gallery_buttons.appendChild(button);
    }
    return gallery_buttons;
}
