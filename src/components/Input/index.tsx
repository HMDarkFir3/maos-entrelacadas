import { useState, forwardRef, FC } from "react";
import { TextInput, TextInputProps, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";
import { Eye, EyeSlash } from "phosphor-react-native";

import {
  Container,
  StyledInput,
  TogglePasswordVisibilityButton,
} from "./styles";

interface Props extends TextInputProps {
  style?: ViewStyle;
  icon: any;
  isPassword?: boolean;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { style, icon: Icon, isPassword = false, ...rest } = props;

  const { colors } = useTheme();

  const [isVisibility, setIsVisibility] = useState<boolean>(false);

  const onTogglePasswordVisibility = () =>
    setIsVisibility((prevState) => !prevState);

  return (
    <Container style={style}>
      <Icon />
      <StyledInput
        ref={ref}
        secureTextEntry={isPassword && !isVisibility}
        placeholderTextColor={colors.components.input.placeholder}
        {...rest}
      />
      {isPassword && (
        <TogglePasswordVisibilityButton
          activeOpacity={0.7}
          onPress={onTogglePasswordVisibility}
        >
          {isVisibility ? (
            <EyeSlash size={24} color={colors.components.input.placeholder} />
          ) : (
            <Eye size={24} color={colors.components.input.placeholder} />
          )}
        </TogglePasswordVisibilityButton>
      )}
    </Container>
  );
});
