import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";
import { motion } from "framer-motion";

export const FormComponent = styled(motion.form)`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font: var(--text-1);
    color: var(--text);
    padding: ${pixelToRem(26, 0)};
`;

export const Input = styled.input`
    width: ${pixelToRem(416)};
    height: ${pixelToRem(56)};
    border: 1px solid var(--gray-05);
    border-radius: ${pixelToRem(6)};
    font: var(--text-1);
    color: var(--text);
    padding-left: ${pixelToRem(10)};
    background: url(--background);
`;
