import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex-direction: row;
`;

export const Dot = styled(Animated.View)`
  height: 10px;
  width: 14px;

  margin: 0 10px;

  background-color: ${({ theme }) =>
    theme.colors.components.introduction_slider_paginator.dot};
  border-radius: 2px;
`;
