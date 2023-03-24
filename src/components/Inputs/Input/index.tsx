import { useState, forwardRef } from "react";
import { TextInput, TextInputProps, ViewStyle, StyleProp } from "react-native";
import { useTheme } from "styled-components/native";
import { Eye, EyeSlash } from "phosphor-react-native";

import { useSettings } from "@hooks/useSettings";

import {
  Container,
  Wrapper,
  StyledInput,
  TogglePasswordVisibilityButton,
  MaxLength,
} from "./styles";

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  value?: string;
  icon: any;
  isPassword?: boolean;
  isEditable?: boolean;
  maxLength?: number;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const {
    style,
    value,
    icon: Icon,
    isPassword = false,
    isEditable = true,
    maxLength,
    ...rest
  } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [isVisibility, setIsVisibility] = useState<boolean>(false);

  const onTogglePasswordVisibility = () =>
    setIsVisibility((prevState) => !prevState);

  return (
    <Container style={style}>
      <Wrapper>
        <Icon />
        <StyledInput
          ref={ref}
          style={{ fontSize: fontSizeValue(20) }}
          secureTextEntry={isPassword && !isVisibility}
          placeholderTextColor={colors.components.input.placeholder}
          maxLength={maxLength}
          isEditable={isEditable}
          editable={isEditable}
          {...rest}
        />
        {isPassword && (
          <TogglePasswordVisibilityButton
            activeOpacity={0.7}
            onPress={onTogglePasswordVisibility}
          >
            {isVisibility ? (
              <EyeSlash
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            ) : (
              <Eye
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
          </TogglePasswordVisibilityButton>
        )}
      </Wrapper>

      {maxLength && (
        <MaxLength style={{ fontSize: fontSizeValue(16) }}>
          {value?.length}/{maxLength}
        </MaxLength>
      )}
    </Container>
  );
});
