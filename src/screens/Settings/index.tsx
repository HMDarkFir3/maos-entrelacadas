import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { Moon } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { toggleTheme } from '@store/settings/actions';

import { BackButton } from '@components/Buttons/BackButton';
import { Switcher } from '@components-of-screens/Settings/components/Switcher';
import { FontSwitcher } from '@components-of-screens/Settings/components/FontSwitcher';

import { Container, Header, Wrapper } from './styles';

export const Settings: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const onToggleTheme = async () => dispatch(toggleTheme());

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <Wrapper>
        <Switcher
          icon={() => <Moon size={fontSizeValue(24)} color={colors.icon600} weight="bold" />}
          title="Tema escuro"
          value={theme.title === 'dark'}
          switchValue={theme.title === 'dark'}
          onSwitchValue={onToggleTheme}
        />

        {/* <Switcher
          icon={() => <BellRinging size={fontSizeValue(24)} color={colors.icon600} weight="bold" />}
          title="Receber notificações"
          switchValue={notificationsSwitch}
          onSwitchValue={onToggleNotifications}
        /> */}

        <FontSwitcher />
      </Wrapper>
    </Container>
  );
};
