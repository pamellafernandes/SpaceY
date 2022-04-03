import { useState } from "react";
import logo from "./logo.svg";
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./styles/styles";
import Button from "./components/Button";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header>
                <h1>Hello World</h1>
            </Header>

            <Button text="Inscreva-se agora" />
        </>
    );
}

export default App;
