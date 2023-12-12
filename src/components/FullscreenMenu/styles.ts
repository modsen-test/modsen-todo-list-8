import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 80px;
    width: 100vw;
    height: 100vh;
    background: ${theme.bg.header};

    @media screen and ${theme.media.mobile} {
      top: 110px;
    }
  `}
`;

export const StyledLink = styled(Link)<{ $active: boolean }>`
  ${({theme, $active}) => css`
    font-size: ${theme.fontSizes.xl}px;
    text-decoration: none;
    font-weight: ${$active ? `bold` : 'normal'};
    color: ${$active ? theme.text.activeLink : theme.text.button};
    outline: none;
    margin: 10px 0;
  `}
`;


export const Menu = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;