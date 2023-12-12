import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${theme.bg.header};
    gap: 20px 20px;
    padding: 20px;

    div {
      grid-column: 1/3;
      align-self: center;
      justify-self: center;
      color: ${theme.text.button};
      font-size: ${theme.fontSizes.lg}px;
    }
  `}
`;