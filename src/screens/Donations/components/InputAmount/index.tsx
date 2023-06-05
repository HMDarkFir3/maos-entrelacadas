import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { CurrencyCircleDollar } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { Container, Wrapper, Title, Input, CurrencyType } from './styles';

interface Props {
  isActive: boolean;
  onPress?: () => void;
}

export const InputAmount: FC<Props> = (props) => {
  const { isActive, onPress } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container isActive={isActive} enabled={!isActive} onPress={onPress}>
      <Wrapper isActive={isActive}>
        {isActive ? (
          <>
            <Input keyboardType="numeric" style={{ fontSize: fontSizeValue(20) }} />
            <CurrencyType style={{ fontSize: fontSizeValue(20) }}>brl</CurrencyType>
          </>
        ) : (
          <>
            <CurrencyCircleDollar
              size={fontSizeValue(20)}
              color={colors.primary600}
              weight="bold"
            />
            <Title style={{ fontSize: fontSizeValue(20) }}>VALOR CUSTOMIZADO</Title>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
