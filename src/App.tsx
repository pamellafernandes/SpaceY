import { useState } from "react";
import { GlobalStyles } from "./styles/globalstyles";
import * as S from "./styles/styles";
import * as A from "./components/Gallery/styles";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Icon from "./components/Icon";
import { DivIcon } from "./components/Icon/styles";
import { pixelToRem } from "./utils/pixelToRem";

function App() {
    return (
        <>
            <S.Container flex="column" margin={pixelToRem(24, 112, 50)}>
                <GlobalStyles />

                <S.Header>
                    <S.Logo />
                </S.Header>

                <S.Main>
                    <S.FirstTitle>Finalmente é possível!</S.FirstTitle>

                    <S.SecondTitle>
                        Sua jornada para Marte começa aqui
                        <span />
                    </S.SecondTitle>
                    <S.Subtitle>
                        A primeira viagem para Marte estará disponivel a partir do dia 12/03/2028.
                        Inscreva-se em nossa lista de espera.
                    </S.Subtitle>
                    <S.AstrounautIlustration />
                </S.Main>
                <S.DivButton>
                    <Button text="Inscreva-se agora" fullWidth />
                </S.DivButton>

                <S.DivIcons>
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
                </S.DivIcons>
            </S.Container>
            <S.SectionAbout flex="column">
                <S.Container width="100%">
                    <S.ContainerAbout width="100%" alignItems="center" justifyContent="center">
                        <S.ImageMars />

                        <S.DivAboutMars>
                            <S.FirstTitle>Por que Marte?</S.FirstTitle>

                            <S.SecondSubTitle>Sobre o planeta vermelho</S.SecondSubTitle>
                            <S.TextMars>
                                A uma distância média de 140 milhões de milhas, Marte é um dos
                                vizinhos habitáveis ​mais próximos da Terra. Marte está mais ou
                                menos a metade da distância da Terra do Sol, então ainda tem luz
                                solar decente. Está um pouco frio, mas podemos esquentar. Sua
                                atmosfera é composta principalmente de CO2 com um pouco de
                                nitrogênio e argônio e alguns outros oligoelementos, o que significa
                                que podemos cultivar plantas em Marte apenas comprimindo a
                                atmosfera.
                            </S.TextMars>

                            <S.TextMars>
                                A gravidade em Marte é cerca de 38% da da Terra, então você seria
                                capaz de levantar coisas pesadas e dar voltas. Além disso, o dia
                                está notavelmente próximo ao da Terra.
                            </S.TextMars>
                        </S.DivAboutMars>
                    </S.ContainerAbout>
                </S.Container>
                <S.GalleryContent>
                    <S.DivLogo>
                        <S.DivLogoSpaceY>
                            <S.Logo />
                        </S.DivLogoSpaceY>

                        <S.TextLogo>
                            O caminho para tornar a humanidade multiplanetária <span />
                        </S.TextLogo>
                        <S.TextSubscribe>Inscreva-se agora</S.TextSubscribe>
                    </S.DivLogo>
                    <A.ArrowLeft />
                    <Gallery />
                    <A.ArrowRight />
                </S.GalleryContent>
            </S.SectionAbout>
        </>
    );
}

export default App;
