

const Navbar = (() => {

    const base = document.createElement("div");
    base.id = "navbar";

    const section_names = ["home", "menu", "about", "contact"];

    for (i=0; i < section_names.length; i++) {
        let button = document.createElement("button");
        button.textContent = section_names[i];

        button.addEventListener("click", () => {
            //scroll to that section name based on id. 
            console.log("clicked!");
        })

        base.appendChild(button);
    }

    return base;
})();

export default Navbar;