import styled from "styled-components";

function pixelToRem(...values: number[]) {
    return values.reduce((acc, current) => (acc += current / 16 + `rem `), "").trim();
}

export const Header = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--space);
`;
export const Logo = styled.image`
    width: pixelToRem(201);
    height: pixelToRem(41);
`;

export const Main = styled.div``;

export const Title = styled.div``;

export const Subtitle = styled.div``;
