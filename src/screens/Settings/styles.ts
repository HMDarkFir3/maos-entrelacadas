import styled from "styled-components/native";

import { STATUS_BAR_HEIGHT } from "@utils/globalVariables";

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  margin-top: ${STATUS_BAR_HEIGHT + }px;
`;
