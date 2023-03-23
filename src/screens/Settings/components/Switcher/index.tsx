import { FC } from "react";
import { Switch, SwitchProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Wrapper, Title } from "./styles";

interface Props extends SwitchProps {
  icon: any;
  title: string;
  switchValue: boolean;
  onSwitchValue: () => void;
}

export const Switcher: FC<Props> = (props) => {
  const { icon: Icon, title, switchValue, onSwitchValue, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper>
        <Icon />
        <Title>{title}</Title>
      </Wrapper>

      <Switch
        {...rest}
        trackColor={{
          false: colors.screens.settings.components.switcher.trackInactive,
          true: colors.screens.settings.components.switcher.trackActive,
        }}
        thumbColor={
          switchValue
            ? colors.screens.settings.components.switcher.thumbActive
            : colors.screens.settings.components.switcher.thumbInactive
        }
        value={switchValue}
        onValueChange={onSwitchValue}
      />
    </Container>
  );
};
