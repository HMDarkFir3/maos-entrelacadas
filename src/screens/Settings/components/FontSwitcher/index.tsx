import { FC } from "react";
import { useTheme } from "styled-components/native";
import { TextAa } from "phosphor-react-native";

import { useSettings } from "@hooks/useSettings";

import { Container, Wrapper, Title, SelectedFont } from "./styles";

interface Props {}

export const FontSwitcher: FC<Props> = (props) => {
  const {} = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper>
        <TextAa
          size={24}
          color={colors.screens.settings.components.fontSwitcher.icon}
          weight="bold"
        />
        <Title style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
          Tamanho da fonte
        </Title>
      </Wrapper>

      <SelectedFont style={{ fontSize: fontSizeValue(20) }}>
        Normal
      </SelectedFont>
    </Container>
  );
};
