import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  onBackButton?: () => void;
}

export const BackButton: FC<Props> = (props) => {
  const { onBackButton, ...rest } = props;

  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const onPressBackButton = () => {
    if (onBackButton) {
      onBackButton();
    }

    goBack();
  };

  return (
    <Container activeOpacity={0.7} onPress={onPressBackButton} {...rest}>
      <ArrowLeft size={20} color={colors.components.backButton.icon} />
      <Title>Voltar</Title>
    </Container>
  );
};
