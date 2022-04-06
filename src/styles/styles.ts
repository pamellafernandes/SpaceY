import styled from "styled-components";

function pixelToRem(...values: number[]) {
    return values.reduce((acc, current) => (acc += current / 16 + `rem `), "").trim();
}

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

export const FirstTitle = styled.p`
    color: var(--sun);
    font: var(--text-4);
    text-transform: uppercase;
    letter-spacing: ${pixelToRem(6)};
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
            right: -16px;
        }
    }
`;

export const Subtitle = styled.p`
    color: var(--gray-05);
    font: var(--font-heading-3);
    max-width: ${pixelToRem(728)};
`;

export const AstrounautIlustration = styled.image`
    width: ${pixelToRem(500)};
    height: ${pixelToRem(564)};
    position: absolute;
    background-image: url("/images/home-mars-right.svg");
    background-repeat: no-repeat;
    right: ${pixelToRem(-80)};
    top: ${pixelToRem(10)};
`;

export const DivButton = styled.div`
    width: ${pixelToRem(264)};
    padding-top: ${pixelToRem(32)};
`;
