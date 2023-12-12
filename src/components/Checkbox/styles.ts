import styled, {css} from "styled-components";

import CheckedIcon from "@/assets/images/checked.svg?react";
import {Theme} from "@/types/theme.ts";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${theme.border.checkbox};
    border-radius: 5px;
    flex-shrink: 0;
    cursor: pointer;
  `}
`;

export const StyledChecked = styled(CheckedIcon)<{ $theme: Theme }>`
  ${({theme}) => css`
    width: 30px;
    height: 30px;
    user-select: none;
    pointer-events: none;
    fill: ${theme.text.text};
  `}
`;