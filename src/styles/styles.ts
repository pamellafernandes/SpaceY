import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${pixelToRem(24, 112, 50)};
`;

export const Header = styled.div`
    display: flex;
    padding-bottom: ${pixelToRem(95)};
`;
export const Logo = styled.image`
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
    background-image: url("/images/logo-space-y.svg");
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pixelToRem(815)};
    padding-bottom: ${pixelToRem(32)};
`;

export const FirstTitle = styled.div`
    color: var(--sun);
    font: var(--text-4);
    text-transform: uppercase;
    letter-spacing: ${pixelToRem(5)};
`;

export const SecondTitle = styled.p`
    color: var(--text);
    font: var(--font-display);
    & > span {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            background-color: var(--mars-dark);
            width: 15px;
            height: 15px;
            border-radius: 50%;
            bottom: 18px;
            right: -30px;
        }
    }
`;

export const Subtitle = styled.p`
    color: var(--gray-05);
    font: var(--font-heading-3);
    max-width: ${pixelToRem(728)};
`;

export const AstrounautIlustration = styled.image`
    width: ${pixelToRem(600)};
    height: ${pixelToRem(600)};
    position: absolute;
    background-image: url("/images/home-mars-right.svg");
    background-repeat: no-repeat;
    right: ${pixelToRem(-130)};
    top: ${pixelToRem(10)};
`;

export const DivButton = styled.div`
    width: ${pixelToRem(264)};
    padding-bottom: ${pixelToRem(135)};
`;
export const DivIcons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${pixelToRem(1440)};
    align-items: center;
`;
export const SectionAbout = styled.div`
    display: flex;
    justify-content: center;
    background: var(--background-section);
    flex-direction: row;
    background-image: url("/images/stars.jpg");
`;
export const ImageMars = styled.image`
    width: ${pixelToRem(621)};
    height: ${pixelToRem(621)};
    background-image: url("/images/mars.svg");
`;
export const DivAboutMars = styled.div`
    max-width: ${pixelToRem(603)};
    padding-top: ${pixelToRem(138)};
`;
export const SecondSubTitle = styled.p`
    font: var(--font-heading-1);
    color: var(--text);
    padding-top: ${pixelToRem(14)};
`;

export const TextMars = styled.p`
    font: var(--text-1);
    color: var(--gray-05);
    padding-top: ${pixelToRem(26)};
`;
