import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  flex: 1;

  margin-top: 24px;
  padding: 0 24px;
`;

export const Footer = styled.View`
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;
