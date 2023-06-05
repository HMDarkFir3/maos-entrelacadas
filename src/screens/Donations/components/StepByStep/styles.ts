import styled, { css } from 'styled-components/native';

export const Container = styled.View`
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

export const Separator = styled.View`
  width: 12px;
  height: 2px;

  border-radius: 2px;

  ${({ theme }) => css`
    background-color: ${theme.colors.text200};
  `}
`;
