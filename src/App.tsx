import { GlobalStyles } from "./styles/globalstyles";
import * as S from "./styles/styles";
import * as A from "./components/Gallery/styles";

import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Icon from "./components/Icon";
import Form from "./components/Form";
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

            <S.SectionForm>
                <S.ContainerForm>
                    <S.DivForm
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: -60 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } },
                        }}
                    >
                        <S.IconForm />
                        <S.TitleForm>
                            Garanta a sua vaga para a primeira viagem para Marte
                        </S.TitleForm>

                        <S.SubTitleForm>
                            Preencha os campos abaixo e se inscreva em nossa lista de espera.
                        </S.SubTitleForm>
                        <Form type="text" text="Seu nome" />
                        <Form type="email" text="E-mail" />
                        <Form type="number" text="Telefone" />
                        <S.DivInputCheckbox>
                            <S.InputCheckbox type="checkbox" />
                            <S.TextCheckbox>Concordo em receber comunicações</S.TextCheckbox>
                        </S.DivInputCheckbox>
                        <Button text="Garantir minha vaga" fullWidth />
                    </S.DivForm>
                    <S.DivRocketImage
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: 0 },
                            visible: {
                                opacity: 1,
                                y: -100,
                                transition: { duration: 1, delay: 1 },
                            },
                        }}
                    >
                        <S.RocketImage>
                            <img src="/images/rocket.svg" alt="Rocket" />
                        </S.RocketImage>
                    </S.DivRocketImage>
                </S.ContainerForm>
                <S.SectionFooter>
                    <S.DivImageSmoke
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: 0 },
                            visible: {
                                opacity: 1,
                                y: -100,
                                transition: { duration: 0.7, delay: 0.7 },
                            },
                        }}
                    >
                        <img src="/images/smoke.svg" alt="" />
                    </S.DivImageSmoke>
                    <S.DivFooterBottom>
                        <S.DivLogoSpaceY>
                            <S.Logo />
                        </S.DivLogoSpaceY>
                        <S.DivSocial>
                            <img src="/images/instagram.svg" alt="" />
                            <img src="/images/linkedin.svg" alt="" />
                            <img src="/images/facebook.svg" alt="" />
                        </S.DivSocial>
                        <S.DivFooterMenu>
                            <ul>
                                <li>
                                    <a href="/">Início</a>
                                </li>
                                <li>
                                    <a href="/">Sobre nós</a>
                                </li>
                                <li>
                                    <a href="/">Missões</a>
                                </li>
                                <li>
                                    <a href="/">Contato</a>
                                </li>
                            </ul>
                        </S.DivFooterMenu>
                    </S.DivFooterBottom>
                </S.SectionFooter>
            </S.SectionForm>
        </>
    );
}

export default App;
