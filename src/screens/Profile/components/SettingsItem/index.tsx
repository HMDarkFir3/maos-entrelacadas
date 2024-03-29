import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CaretRight } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { useSettings } from '@hooks/useSettings';

import { Container, Wrapper, Title } from './styles';

interface Props extends RectButtonProps {
  icon: any;
  title: string;
}

export const SettingsItem: FC<Props> = (props) => {
  const { icon: Icon, title, ...rest } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Wrapper>
        <Icon />
        <Title style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
          {title}
        </Title>
      </Wrapper>

      <CaretRight size={fontSizeValue(24)} color={colors.icon900} />
    </Container>
  );
};
