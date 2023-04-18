import { useState, FC } from 'react';
import { ViewStyle, FlatList } from 'react-native';
import { useAnimatedStyle, interpolate, withTiming, Extrapolate } from 'react-native-reanimated';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { CaretDown } from 'phosphor-react-native';

import { GenderDTO } from '@dtos/GenderDTO';

import { useSettings } from '@hooks/useSettings';

import {
  Container,
  Wrapper,
  Placeholder,
  CaretWrapper,
  ErrorText,
  List,
  Item,
  ItemText,
  ItemSeparator,
  SelectedText,
} from './styles';

interface Props<T> {
  style?: ViewStyle;
  control: any;
  selectName: string;
  dirtyValue?: string;
  error?: any;
  placeholder?: string;
  icon: any;
  data: T;
  isEditable?: boolean;
}

export const Select: FC<Props<GenderDTO.Response[]>> = (props) => {
  const {
    style,
    control,
    selectName,
    dirtyValue,
    error,
    icon: Icon,
    placeholder,
    data,
    isEditable = true,
  } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const caretWrapperAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(isOpen ? 1 : 0, [0, 1], [0, 180], Extrapolate.CLAMP);

    return {
      transform: [{ rotate: withTiming(`${rotate}deg`, { duration: 300 }) }],
    };
  });

  const onPressOpenSelect = () => setIsOpen((prevState) => !prevState);

  return (
    <Container style={style}>
      <Wrapper
        testID="Select.Wrapper"
        error={!!error}
        activeOpacity={0.7}
        disabled={!isEditable}
        onPress={onPressOpenSelect}
      >
        <Icon />
        {dirtyValue ? (
          <ItemText style={{ marginLeft: 16, fontSize: fontSizeValue(20) }} isEditable={isEditable}>
            {dirtyValue}
          </ItemText>
        ) : (
          <Placeholder style={{ marginLeft: 16, fontSize: fontSizeValue(20) }}>
            {placeholder ?? 'Selecione uma opção'}
          </Placeholder>
        )}

        <CaretWrapper style={caretWrapperAnimatedStyle}>
          <CaretDown size={fontSizeValue(16)} color={colors.components.select.primary} />
        </CaretWrapper>
      </Wrapper>

      {error && <ErrorText style={{ fontSize: fontSizeValue(16) }}>{error}</ErrorText>}

      {isOpen && (
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <List>
              <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Item
                    onPress={() => {
                      setIsOpen(false);
                      onChange(item.name);
                    }}
                  >
                    <SelectedText
                      style={{ marginLeft: 16, fontSize: fontSizeValue(20) }}
                      isSelected={item.name === value}
                    >
                      {item.name}
                    </SelectedText>
                  </Item>
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
              />
            </List>
          )}
          name={selectName}
        />
      )}
    </Container>
  );
};
