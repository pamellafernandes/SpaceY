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
    DivIcons,
} from "./styles/styles";
import Button from "./components/Button";
import Icon from "./components/Icon";
import { DivIcon } from "./components/Icon/styles";

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
                        <span />
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

                <DivIcons>
                    <Icon
                        src="/images/icon-rocket.svg"
                        txt="Foguetes com a mais alta tecnologia e conforto."
                        alt="Rocket"
                    />
                    <Icon
                        src="/images/icon-flag.svg"
                        txt="Mais de 100 milhões consecutivas com sucesso."
                        alt="Flag"
                    />
                    <Icon
                        src="/images/icon-telescope.svg"
                        txt="Experiencia única e exclusiva."
                        alt="Telescope"
                    />
                </DivIcons>
            </>
        </Container>
    );
}

export default App;
