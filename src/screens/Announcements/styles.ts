import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin-top: 32px;
  margin-bottom: 36px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;
