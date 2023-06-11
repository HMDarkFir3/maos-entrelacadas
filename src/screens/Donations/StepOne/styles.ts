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

export const MessageWrapper = styled.View`
  padding: 0 24px;
`;

export const MessageHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const MessageLenght = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text200};
  `}
`;

export const MessageInput = styled.TextInput`
  width: 100%;

  margin-top: 20px;

  padding: 16px;

  border-radius: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text900};

    border: 1px solid ${theme.colors.text200};
  `}
`;

export const AnonymousWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const ButtonWrapper = styled.View`
  padding: 0 24px 24px;
`;
