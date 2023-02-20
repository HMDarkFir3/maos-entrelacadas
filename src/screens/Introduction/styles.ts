import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const IntroductionContainer = styled.View`
  flex-direction: row;
`;

export const IntroductionDot = styled(Animated.View)`
  height: 10px;
  width: 14px;

  margin: 0 10px;

  background-color: ${({ theme }) =>
    theme.colors.components.introduction_slider_paginator.dot};
  border-radius: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  width: 100%;

  margin-bottom: 32px;
`;

export const EmptyView = styled.View``;
