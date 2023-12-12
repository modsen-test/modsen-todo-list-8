import styled, {css} from "styled-components";

export const StyledInput = styled.input`
  ${({theme}) => css`
    border: none;
    outline: none;
    width: calc(100% - 20px);
    color: ${theme.text.text};
    font-size: ${theme.fontSizes.lg}px;
    border-bottom: 4px solid ${theme.border.input};
    padding: 0 10px 0 10px;
    background: transparent;

    &:focus {
      border-bottom: 4px solid ${theme.border.focused};
    }

    &::-webkit-input-placeholder {
      color: ${theme.text.text};
    }
  `}
`;