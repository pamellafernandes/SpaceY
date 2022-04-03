import { useState } from "react";
import logo from "./logo.svg";
import { GlobalStyles } from "./styles/globalstyles";
import { Header } from "./styles/styles";
import Button from "./components/Button";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum molestiae asperiores nam eum, qui tempora quis in fuga
                vel sint nemo neque reiciendis explicabo architecto ad adipisci,
                blanditiis sequi.
            </Header>

            <Button text="Inscreva-se agora" />
        </>
    );
}

export default App;
