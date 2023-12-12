import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 80px;
    width: calc(100vw - 17px);
    height: 100vh;
    background: ${theme.bg.header};

    @media screen and ${theme.media.mobile} {
      top: 110px;
    }

    @media screen and ${theme.media.smallMobile} {
      top: 130px;
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
  `}
`;


export const Menu = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;