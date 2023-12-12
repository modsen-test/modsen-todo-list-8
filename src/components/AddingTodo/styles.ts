import styled, {css} from "styled-components";

import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {quake} from "@/constants/animations.ts";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 10px 50px;
    width: 100%;

    @media screen and ${theme.media.laptop} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const StyledLabel = styled.label`
  ${({theme}) => css`
    grid-column: 1/3;
    color: ${theme.text.label};
    font-size: ${theme.fontSizes.sm}px;

    @media screen and ${theme.media.laptop} {
      grid-column: 1/2;
    }
  `}
`;

export const StyledInput = styled(Input)<{ $quake: boolean }>`
  ${({$quake}) => css`
    ${$quake && css`animation: ${quake} .25s linear infinite;`}
  `}
`;


export const StyledButton = styled(Button)`
  max-width: 150px;
  justify-self: center;
`;