import styled, { css } from 'styled-components/native';

export const ToBeDonation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;

  margin-top: 24px;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.primary600};
  border-radius: 8px;
`;

export const ToBeDonationText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text100};
  `}
`;
