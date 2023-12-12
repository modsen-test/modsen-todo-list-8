import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    width: 100%;
    color: ${theme.text.text};

    h2 {
      text-align: center;
    }
  `}
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Line = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 1px;
    background: ${theme.border.input};
  `}
`;