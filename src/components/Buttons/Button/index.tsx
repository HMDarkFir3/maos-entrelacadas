import { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { useSettings } from "@hooks/useSettings";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button: FC<Props> = (props) => {
  const { title, ...rest } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title style={{ fontSize: fontSizeValue(16) }}>{title}</Title>
    </Container>
  );
};
