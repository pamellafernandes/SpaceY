import { createGlobalStyle } from "styled-components";

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
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: "Heebo", sans-serif;
}


:root {
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

}
`;
