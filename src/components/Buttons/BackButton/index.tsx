import { FC } from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  onBackButton?: () => void;
}

export const BackButton: FC<Props> = (props) => {
  const { onBackButton, ...rest } = props;

  const { fontSizeValue } = useSettings();
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const onPressBackButton = () => {
    if (onBackButton) {
      onBackButton();
    }

    goBack();
  };

  return (
    <Container onPress={onPressBackButton} {...rest}>
      <ArrowLeft size={fontSizeValue(20)} color={colors.icon1000} />
      <Title style={{ fontSize: fontSizeValue(14) }}>Voltar</Title>
    </Container>
  );
};
