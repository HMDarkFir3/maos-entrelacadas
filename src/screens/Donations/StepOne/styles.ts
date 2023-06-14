import styled, { css } from 'styled-components/native';

export const AmountWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  margin: 20px 0;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  margin: 20px 0;

  ${({ theme }) => css`
    background-color: ${theme.colors.donationBorder};
  `}
`;

export const ButtonWrapper = styled.View`
  padding: 0 24px 24px;
`;
