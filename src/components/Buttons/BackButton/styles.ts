import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 4px;

  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.backButton.title};
  `}
`;
