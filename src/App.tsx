import { useState } from "react";
import logo from "./logo.svg";
import { GlobalStyles } from "./styles/globalstyles";
import { Header, Logo, Main, SecondTitle, Subtitle, FirstTitle } from "./styles/styles";
import Button from "./components/Button";

function App() {
    return (
        <>
            <GlobalStyles />

            <Header>
                <Logo>
                    <img src="/images/logo-space-y.svg" alt="Logo Spacey" />
                </Logo>
            </Header>

            <Main>
                <FirstTitle>Finalmente é possível</FirstTitle>

                <SecondTitle>
                    Sua jornada para Marte começa aqui <span>.</span>
                </SecondTitle>

                <Subtitle>
                    A primeira viagem para Marte estará disponivel apartir do dia 12/03/2028.
                    Inscreva-se em nossa lista de espera.
                </Subtitle>
            </Main>

            <Button text="Inscreva-se agora" />
        </>
    );
}

export default App;
