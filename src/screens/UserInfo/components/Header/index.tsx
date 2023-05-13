import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { NotePencil } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import { Container, Wrapper, UserImage } from './styles';

export const Header: FC = () => {
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <BackButton />

      <Wrapper>
        <UserImage source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />
      </Wrapper>

      <NotePencil size={fontSizeValue(32)} color={colors.screens.userInfo.components.header.icon} />
    </Container>
  );
};
