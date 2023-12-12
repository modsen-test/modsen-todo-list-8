import styled, {css} from "styled-components";

import {Input} from "@/components/Input";
import {quake} from "@/constants/animations.ts";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: grid;
    flex-direction: row;
    align-items: center;
    gap: 30px 0;
    width: 100%;
    max-width: 500px;

    input {
      width: calc(100% - 20px);
    }

    h3, h4 {
      color: ${theme.text.text}
    }

    h3 {
      font-size: ${theme.fontSizes.sm}px;
      grid-column: 1/3;
    }
  `}
`;

export const StyledInput = styled(Input)<{ $quake: boolean }>`
  ${({$quake}) => css`
    ${$quake && css`animation: ${quake} .25s linear infinite;`}
  `}
`

export const StyledButton = styled.button`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-items: center;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      object-fit: contain;
      width: 29px;
      height: 28px;

      circle, line {
        stroke: ${theme.text.text};
      }
    }
  `}
`;