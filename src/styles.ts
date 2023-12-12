import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme})=>css`
    min-height: 100vh;
    background: ${theme.bg.application};
  `}
`;