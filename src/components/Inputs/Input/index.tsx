import { useState, forwardRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { Eye, EyeSlash } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import {
  Container,
  Wrapper,
  StyledInput,
  TogglePasswordVisibilityButton,
  Footer,
  ErrorText,
  MaxLength,
  EmptyView,
} from './styles';

interface Props extends TextInputProps {
  style?: ViewStyle;
  control: any;
  inputName: string;
  dirtyValue?: string;
  error?: any;
  icon: any;
  isPassword?: boolean;
  isEditable?: boolean;
  maxLength?: number;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const {
    style,
    control,
    inputName,
    dirtyValue,
    error,
    icon: Icon,
    isPassword = false,
    isEditable = true,
    maxLength,
    ...rest
  } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [isVisibility, setIsVisibility] = useState<boolean>(false);

  const onTogglePasswordVisibility = () => setIsVisibility((prevState) => !prevState);

  return (
    <Container style={style}>
      <Wrapper error={!!error}>
        <Icon />

        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <StyledInput
              ref={ref}
              style={{ fontSize: fontSizeValue(20) }}
              value={value}
              onChangeText={onChange}
              secureTextEntry={isPassword && !isVisibility}
              placeholderTextColor={colors.placeholder}
              maxLength={maxLength}
              isEditable={isEditable}
              editable={isEditable}
              {...rest}
            />
          )}
          name={inputName}
        />
        {isPassword && (
          <TogglePasswordVisibilityButton
            testID="Input.TogglePasswordVisibilityButton"
            onPress={onTogglePasswordVisibility}
          >
            {isVisibility ? (
              <EyeSlash size={fontSizeValue(24)} color={colors.placeholder} />
            ) : (
              <Eye size={fontSizeValue(24)} color={colors.placeholder} />
            )}
          </TogglePasswordVisibilityButton>
        )}
      </Wrapper>
      <Footer>
        {error ? (
          <ErrorText style={{ fontSize: fontSizeValue(16) }}>{error}</ErrorText>
        ) : (
          <EmptyView />
        )}

        {maxLength && (
          <MaxLength style={{ fontSize: fontSizeValue(16) }}>
            {dirtyValue?.length}/{maxLength}
          </MaxLength>
        )}
      </Footer>
    </Container>
  );
});
