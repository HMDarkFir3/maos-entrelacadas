import { FC } from "react";
import { useTheme } from "styled-components/native";
import { TextAa } from "phosphor-react-native";

import { Container, Wrapper, Title, SelectedFont } from "./styles";

interface Props {}

export const FontSwitcher: FC<Props> = (props) => {
  const {} = props;

  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper>
        <TextAa
          size={24}
          color={colors.screens.settings.components.fontSwitcher.icon}
          weight="bold"
        />
        <Title>Tamanho da fonte</Title>
      </Wrapper>

      <SelectedFont>Normal</SelectedFont>
    </Container>
  );
};
