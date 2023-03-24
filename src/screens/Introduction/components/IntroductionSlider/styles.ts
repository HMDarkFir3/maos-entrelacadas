import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const SvgWrapper = styled.View`
  flex: 1;

  margin-top: 80px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  align-items: center;

  height: ${height / 5}px;
`;

export const Title = styled.Text`
  width: ${width / 1.2}px;

  margin-top: 80px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.introduction.components.introductionSlider
      .textPrimary};
  `}
`;

export const DescriptionWrapper = styled.View`
  align-items: center;

  width: ${Dimensions.get("window").width}px;
`;

export const Description = styled.Text`
  width: 80%;

  margin-top: 20px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.introduction.components.introductionSlider
      .textSecondary};
  `}
`;
