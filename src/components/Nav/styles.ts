import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const StyledLink = styled(Link)<{ $active: boolean }>`
  ${({theme, $active}) => css`
    color: ${theme.text.button};
    font-size: ${theme.fontSizes.xl}px;

    text-decoration: none;
    border-bottom: ${$active ? `2px solid ${theme.border.link}` : 'none'};
    outline: none;
  `}
`;