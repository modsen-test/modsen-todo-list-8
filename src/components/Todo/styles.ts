import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Task = styled.div`
  width: 100%;
  word-break: break-word;
`;

export const EditButton = styled.button`
  ${({theme}) => css`
    width: 34px;
    height: 39px;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      width: 34px;
      height: 39px;

      polygon, path {
        stroke: ${theme.text.text};
      }
    }
  `}
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 40px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;