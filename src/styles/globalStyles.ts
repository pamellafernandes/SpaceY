import { createGlobalStyle } from "styled-components";

function pixelToRem(...values: number[]) {
    return values
        .reduce((acc, current) => (acc += current / 16 + `rem `), "")
        .trim();
}

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    @media(max-width: 1440px){
        /* font-size:93.75%; */
    }

    @media(min-width: 375px) {
      /* font-size: 87.5%;*/
    }
}



body {
    font-family: "Heebo", sans-serif;
    -webkit-font-smoothing: antialiased;
}


:root {

    /* COLORS */

    --space-light: #3D68B2;
    --space-dark: #040327;
    --space: #0B1E8A;
    --gray-01: #0D0E13;
    --gray02: #2C2D3A;
    --gray-03: #60616F; 
    --gray-04: #898A93;
    --gray-05: #D5D5DB;
    --mars: #FF8C70;
    --sun: #F5D15F;
    --jupiter: #E00E34;
    --earth: #0FDD86;
    --saturn: #554AD7;
    --uranus: #24FF; 
    --text: #FFF;

    /* FONTS */
    --font-display: 400 20px 'Roboto', sans-serif;
    /* --font-display: 800 ${pixelToRem(62)} "Heebo", sans-serif;  */

    --font-heading-1 {
        font-weight: 700;
        font-size: ${pixelToRem(32)};
        line-height: ${pixelToRem(48)};
    }

    --font-heading-2 {
        font-weight: 500;
        font-size: ${pixelToRem(24)};
        line-height: ${pixelToRem(32)};
    }

    --font-heading-3 {
        font-weight: 400;
        font-size: ${pixelToRem(20)};
        line-height: ${pixelToRem(24)};
    }

    --text-01 {
        font-weight: 400;
        font-size: ${pixelToRem(20)};
        line-height: ${pixelToRem(24)};
    }
}

`;
