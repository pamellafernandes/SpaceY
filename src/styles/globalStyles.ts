import { createGlobalStyle } from "styled-components";

function pixelToRem(...values: number[]) {
    return values.reduce((acc, current) => (acc += current / 16 + `rem `), "").trim();
}

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 
}

body {
    font-family: "Heebo", sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
 
    
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
    --background: #04032C;
    --over: overflow-x: hidden;
 
    /* FONTS */
    --font-display: 800 ${pixelToRem(62)}/${pixelToRem(97)} "Heebo", sans-serif; 

    --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)}  "Heebo", sans-serif;
        

    --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)}  "Heebo", sans-serif;

    --font-heading-3: 400  ${pixelToRem(20)}/${pixelToRem(24)}"Heebo", sans-serif;
    
}

--text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif; 
--text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif; 
--text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;   
--text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif; 
--text-0: 500 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif; 

`;
