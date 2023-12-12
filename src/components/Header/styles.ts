import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.bg.header};
    position: sticky;
    top: 0;
    min-height: 20px;
    padding: 20px 45px;
  `}
`;

export const Logo = styled.div`
  ${({theme}) => css`
    color: ${theme.text.title};
    font-size: ${theme.fontSizes.xl}px;
  `}
`;