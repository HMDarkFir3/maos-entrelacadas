import { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { IconProps } from "phosphor-react-native";

import { Container, Title, GreenColor } from "./styles";

interface Props extends TouchableOpacityProps {
  type?: "normal" | "register" | "small-button" | "jump";
  icon?: any;
  title?: string;
}

export const Button: FC<Props> = (props) => {
  const { type = "small-button", icon: Icon, title, ...rest } = props;

  const RenderTitle = () => {
    switch (type) {
      case "normal": {
        return <Title type={type}>{title}</Title>;
      }
      case "register": {
        return (
          <Title type={type}>
            Não tem uma conta? <GreenColor>Registrar-se</GreenColor>
          </Title>
        );
      }
      case "small-button": {
        return <Icon />;
      }
      case "jump": {
        return <Title type={type}>Pular</Title>;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Container type={type} activeOpacity={0.7} {...rest}>
      <RenderTitle />
    </Container>
  );
};
