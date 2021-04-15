export {slideshow}

//add dots and maybe captions? have to process captions then
const slideshow = (img_paths) => {

    let index = 0;
    let gallery = createGallery(img_paths);
    //get gallery buttons?

    const getIndex = (i) => {
        if (i == -1) {
            return gallery.length -1;

        } else if (i == gallery.length) {
            return 0;

        } else {
            return i;
        }
    };

    const changeSlide = (num) => {
        frame.innerHTML = "";
        index = getIndex(index + num);
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

    

    // CREATE ELEMENTS

    let body = document.createElement("div");
    body.setAttribute("class", "slideshow");

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

    //add dot buttons?
    //correspond wiht index of gallery item

    //container 1, contianing frame (with attached caption), 2 buttons

    //container 2 (will be within body/slideshows)
    //let container_2 = document.createElement("div");
    //container_2.setAttribute("class", "container-2");
    //for each button in buttons, append to container -2 basically
    //logic for buttons elsewhere



    //event listeners for slide changes
    prev_button.addEventListener("click", function() {
        changeSlide(-1);
        swipe.reset();
    });

    next_button.addEventListener("click", function(){ 
        changeSlide(1);
        swipe.reset();
    });

    
    //add frame to body
    body.appendChild(prev_button);
    body.appendChild(frame);
    body.appendChild(next_button);


    //Set up auto swipe (can only run in anonymous func, not sure why)
    swipe.start();

    //return entire slideshow
    return body;
};


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


function createGalleryButtons(gallery) {

}