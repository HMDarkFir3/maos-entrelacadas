import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Check } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { Container, Wrapper, Title, Amount, CheckWrapper } from './styles';

interface Props extends RectButtonProps {
  amount: string;
  isActive: boolean;
}

export const AmountCard: FC<Props> = (props) => {
  const { amount, isActive, ...rest } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container isActive={isActive} {...rest}>
      {isActive && (
        <CheckWrapper>
          <Check size={fontSizeValue(8)} color={colors.icon40} />
        </CheckWrapper>
      )}

      <Wrapper isActive={isActive}>
        <Title style={{ fontSize: fontSizeValue(16) }} isActive={isActive}>
          R$
        </Title>
        <Amount style={{ fontSize: fontSizeValue(32) }} isActive={isActive}>
          {amount}
        </Amount>
      </Wrapper>
    </Container>
  );
};
