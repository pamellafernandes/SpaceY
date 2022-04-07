import styled from "styled-components";
import { ButtonProps } from ".";

function pixelToRem(...values: number[]) {
    return values.reduce((acc, current) => (acc += current / 16 + `rem `), "").trim();
}

export const ButtonComponent = styled.button<ButtonProps>`
    background: var(--mars-dark);
    width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(200))};
    height: ${pixelToRem(52)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: var(--text);
    font: var(--text-3);
    font-weight: 700;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: var(--gray-01);
        cursor: pointer;
    }
`;
