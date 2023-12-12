import styled, {css} from "styled-components";

import {Input} from "@/components/Input";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 15px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const StyledLabel = styled.label`
    ${({theme})=>css`
      color: ${theme.text.button};
      font-size: ${theme.fontSizes.md}px;
    `}
`;

export const StyledInput = styled(Input)`
  border: none;
  width: calc(100% - 50px);
`;