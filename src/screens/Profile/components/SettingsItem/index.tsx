import { FC } from "react";
import { PressableProps } from "react-native";
import { CaretRight } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { useSettings } from "@hooks/useSettings";

import { Container, Wrapper, Title } from "./styles";

interface Props extends PressableProps {
  icon: any;
  title: string;
}

export const SettingsItem: FC<Props> = (props) => {
  const { icon: Icon, title, ...rest } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container
      android_ripple={{ color: colors.androidRipple.backgroundPrimary }}
      {...rest}
    >
      <Wrapper>
        <Icon />
        <Title style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
          {title}
        </Title>
      </Wrapper>

      <CaretRight
        size={fontSizeValue(24)}
        color={colors.screens.profile.components.settingsItem.icon}
      />
    </Container>
  );
};
