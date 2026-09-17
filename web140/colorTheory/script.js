

const palettes = {

    palette1: {

        name: "Complementary",

        primary: "#1812C2",

        secondary: "#967D02",

        accent: "#383582",

        background: "#424242",

        surface: "#F3F4F6",

        text: "#ae9205"

    },


    palette2: {

        name: "Analogous",

        primary: "#420A36",

        secondary: "#370A42",

        accent: "#000B42",

        background: "#3d1c63",

        surface: "#491881",

        text: "#420a19"

    },


    palette3: {

        name: "Triadic",

        primary: "#3B3B96",

        secondary: "#90C281",

        accent: "#421600",

        background: "#000042",

        surface: "#F0FDF4",

        text: "#195507"

    }

};


/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {

    const root =
        document.documentElement;


    /* Apply palette colors */

    root.style.setProperty(
        "--primary",
        palette.primary
    );


    root.style.setProperty(
        "--secondary",
        palette.secondary
    );


    root.style.setProperty(
        "--accent",
        palette.accent
    );


    root.style.setProperty(
        "--background",
        palette.background
    );


    root.style.setProperty(
        "--surface",
        palette.surface
    );


    root.style.setProperty(
        "--text",
        palette.text
    );


    /* Update HEX values */

    document.getElementById("primaryHex").textContent =
        palette.primary;


    document.getElementById("secondaryHex").textContent =
        palette.secondary;


    document.getElementById("accentHex").textContent =
        palette.accent;


    document.getElementById("backgroundHex").textContent =
        palette.background;


    document.getElementById("textHex").textContent =
        palette.text;

}


/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons =
    document.querySelectorAll("[data-palette]");


paletteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const paletteName =
            button.dataset.palette;


        const selectedPalette =
            palettes[paletteName];


        applyPalette(selectedPalette);

    });

});


/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);
