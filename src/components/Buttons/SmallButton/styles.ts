import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  width: 78px;
  height: 48px;

  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.components.smallButton.background};
    `}
`;

export const Load = styled.ActivityIndicator``;
