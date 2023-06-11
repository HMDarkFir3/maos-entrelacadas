import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;

export const StepByStepWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;

  margin-top: 24px;
  padding: 0 24px;

  border-top-width: 1px;
  border-bottom-width: 1px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary90};
    border-color: ${theme.colors.primary600};
  `}
`;

export const StepByStepSeparator = styled.View`
  width: 12px;
  height: 2px;

  border-radius: 2px;

  ${({ theme }) => css`
    background-color: ${theme.colors.text200};
  `}
`;

export const Scroller = styled.ScrollView``;

export const Title = styled.Text`
  margin-top: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const Description = styled.Text`
  margin-top: 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text600};
  `}
`;
