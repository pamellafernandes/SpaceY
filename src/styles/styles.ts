import styled from "styled-components";

function pixelToRem(...values: number[]) {
    return values.reduce((acc, current) => (acc += current / 16 + `rem `), "").trim();
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${pixelToRem(24, 112, 50)};
    overflow-x: var(--over);
`;

export const Header = styled.div`
    display: flex;
`;
export const Logo = styled.image`
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
    background-image: url("/images/logo-space-y.svg");
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FirstTitle = styled.p`
    color: var(--sun);
    font: var(--text-3);
    text-transform: uppercase;
`;

export const SecondTitle = styled.p`
    color: var(--text);
    font: var(--font-display);

    &&:span {
        color: var(--mars);
    }
`;

export const Subtitle = styled.p`
    color: var(--gray-05);
    font: var(--font-heading-3);
`;
