import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 16px;

  padding: 16px;
`;

export const Wrapper = styled.View`
  flex: 1;

  gap: 4px;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-width: 2px;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary90};
    border-color: ${theme.colors.primary600};
  `}
`;

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Date = styled.Text`
  justify-content: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text500};
  `}
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary600};
  `}
`;

export const ClickHere = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary600};
  `}
`;

export const Proof = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text500};
  `}
`;
