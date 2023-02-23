import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputWrapper = styled.View`
  margin-top: 92px;
`;
