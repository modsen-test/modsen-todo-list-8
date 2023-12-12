import styled, {css} from "styled-components";

import {Theme} from "@/types/theme.ts";

export const StyledInput = styled.input<{ $theme: Theme }>`
  ${({theme, $theme}) => css`
    border: none;
    outline: none;
    width: calc(100% - 20px);
    color: ${theme.text.title};
    font-size: ${theme.fontSizes.lg}px;
    border-bottom: 4px solid ${theme.border.input};
    padding: 0 10px 0 10px;
    background: transparent;
    color: ${$theme === 'dark' ? theme.text.button : theme.text.title};

    &:focus {
      border-bottom: 4px solid ${theme.border.focused};
    }
  `}
`;