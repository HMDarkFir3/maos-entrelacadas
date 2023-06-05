import styled, { css } from 'styled-components/native';

interface CircleProps {
  isActive: boolean;
}

interface TitleProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Circle = styled.View<CircleProps>`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-radius: 12px;

  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.colors.donation : theme.colors.text200};
  `}
`;

export const CircleText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text100};
  `}
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, isActive }) => css`
    font-family: ${theme.fonts.bold};
    color: ${isActive ? theme.colors.text900 : theme.colors.text200};
  `}
`;
