import styled, {css} from "styled-components";

export const Wrapper = styled.div<{ $open: boolean }>`
  ${({theme, $open}) => css`
    border-radius: 10px;
    padding: 5px 40px 5px 10px;
    border: 1px solid ${theme.border.input};
    ${$open && css`
      border-bottom: 1px solid transparent;
      border-radius: 10px 10px 0 0;
    `}
    position: relative;
    cursor: pointer;
    user-select: none;
    z-index: 0;

    &::after {
      display: block;
      content: '';
      position: absolute;
      transition: all ease-in-out 0.1s;
      width: 0;
      height: 0;
      right: 3px;
      top: 50%;
      transform: translate(-50%, ${$open ? '-75%' : '-25%'}) ${$open && 'scale(-100%)'};
      border: 8px solid transparent;
      border-top: 10px solid ${theme.border.checkbox};
    }
  `}
`;

export const Input = styled.div`
  text-transform: capitalize;
`;

export const Items = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 0 5px 10px;
    width: calc(100% - 10px);
    border: 1px solid ${theme.border.input};
    border-radius: 0 0 10px 10px;
    background: ${theme.bg.application};
    position: absolute;
    left: -1px;
    top: 100%;
  `}
`;

export const Item = styled.div`
`;
