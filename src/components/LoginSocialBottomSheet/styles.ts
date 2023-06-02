import styled, { css } from 'styled-components/native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  type: 'primary' | 'secondary';
}

interface ButtonTextProps {
  type: 'primary' | 'secondary';
}

export const Container = styled(BottomSheet)``;

export const Backdrop = styled(BottomSheetBackdrop)<BottomSheetBackdropProps>``;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;

  padding: 24px;
`;

export const Wrapper = styled.View``;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text900};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
  align-items: center;
  justify-content: center;

  width: 45%;
  height: 52px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.primary600 : theme.colors.background};
  border-radius: 16px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    color: ${type === 'primary' ? theme.colors.text100 : theme.colors.primary600};
  `}
`;
