import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { useSettings } from "@hooks/useSettings";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

export const Button: FC<Props> = (props) => {
  const { title, ...rest } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container {...rest}>
      <Title style={{ fontSize: fontSizeValue(16) }}>{title}</Title>
    </Container>
  );
};
