import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
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
