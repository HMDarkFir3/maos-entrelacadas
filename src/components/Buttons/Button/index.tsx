import { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title?: string;
}

export const Button: FC<Props> = (props) => {
  const { title, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
