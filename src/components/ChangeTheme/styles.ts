import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    color: ${theme.text.text};
    font-size: ${theme.fontSizes.md}px;
  `}
`;