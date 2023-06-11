import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  isActive: boolean;
}

interface WrapperProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 80px;

  border-radius: 8px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background-color: ${theme.colors.donationInactive};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      background-color: ${theme.colors.donationInactive};
    `}
`;

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 80px;

  border-radius: 8px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      padding: 0 24px;

      border: 2px solid ${theme.colors.primary600};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      border: 1px solid ${theme.colors.donationBorder};
    `}
`;

export const Title = styled.Text`
  margin-left: 8px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary600};
  `}
`;

export const Input = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text500};
  `}
`;

export const CurrencyType = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text500};
  `}
`;
