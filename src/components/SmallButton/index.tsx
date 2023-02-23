import { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface Props extends TouchableOpacityProps {
  icon?: any;
  title?: string;
}

export const SmallButton: FC<Props> = (props) => {
  const { icon: Icon, title, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon />
    </Container>
  );
};
