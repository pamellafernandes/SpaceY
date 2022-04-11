import styled from "styled-components";
import { ButtonProps } from ".";
import { pixelToRem } from "../../utils/pixelToRem";

export const ButtonComponent = styled.button<ButtonProps>`
    background: var(--mars-dark);
    width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(200))};
    height: ${pixelToRem(52)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: var(--text);
    font: var(--text-3);
    font-weight: 700;
    transition: all ease-in-out 0.5s;

    &:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }
`;
