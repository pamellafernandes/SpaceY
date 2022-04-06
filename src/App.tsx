import { useState } from "react";
import logo from "./logo.svg";
import { GlobalStyles } from "./styles/globalstyles";
import {
    Container,
    Header,
    Logo,
    Main,
    SecondTitle,
    Subtitle,
    FirstTitle,
    AstrounautIlustration,
    DivButton,
} from "./styles/styles";
import Button from "./components/Button";

function App() {
    return (
        <Container>
            <>
                <GlobalStyles />

                <Header>
                    <Logo />
                </Header>

                <Main>
                    <FirstTitle>Finalmente é possível</FirstTitle>

                    <SecondTitle>
                        Sua jornada para Marte começa aqui
                        <span></span>
                    </SecondTitle>
                    <Subtitle>
                        A primeira viagem para Marte estará disponivel apartir do dia 12/03/2028.
                        Inscreva-se em nossa lista de espera.
                    </Subtitle>
                    <AstrounautIlustration />
                </Main>
                <DivButton>
                    <Button text="Inscreva-se agora" fullWidth />
                </DivButton>
            </>
        </Container>
    );
}

export default App;
