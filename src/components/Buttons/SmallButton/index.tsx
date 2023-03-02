import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Load } from "./styles";

interface Props extends TouchableOpacityProps {
  icon?: any;
  title?: string;
  isLoading?: boolean;
}

export const SmallButton: FC<Props> = (props) => {
  const { icon: Icon, title, isLoading = false, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      {isLoading ? (
        <Load size="small" color={colors.components.smallButton.icon} />
      ) : (
        <Icon />
      )}
    </Container>
  );
};
