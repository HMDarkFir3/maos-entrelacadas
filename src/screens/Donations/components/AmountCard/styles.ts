import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { SCREEN_WIDTH } from '@utils/constants';

interface ContainerProps {
  isActive: boolean;
}

interface WrapperProps {
  isActive: boolean;
}

interface TitleProps {
  isActive: boolean;
}

interface AmountProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;

  width: ${SCREEN_WIDTH / 2 - 36}px;
  height: 80px;

  border-radius: 8px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background-color: ${theme.colors.donationActive};
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

  width: ${SCREEN_WIDTH / 2 - 36}px;
  height: 80px;

  border-radius: 8px;
  border-width: 1px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-color: ${theme.colors.primary600};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      border-color: ${theme.colors.donationInactive};
    `}
`;

export const Title = styled.Text<TitleProps>`
  margin-top: 12px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.primary600};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.text600};
    `}
`;

export const Amount = styled.Text<AmountProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.primary600};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.text600};
    `}
`;

export const CheckWrapper = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 8px;
  right: 8px;

  width: 16px;
  height: 16px;

  background-color: ${({ theme }) => theme.colors.primary600};
  border-radius: 8px;
`;
