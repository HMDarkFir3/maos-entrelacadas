import { useState, FC } from 'react';
import { ViewStyle, FlatList } from 'react-native';
import { useAnimatedStyle, interpolate, withTiming, Extrapolate } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { CaretDown } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { genders } from '@utils/genders';

import {
  Container,
  Wrapper,
  Placeholder,
  CaretWrapper,
  List,
  Item,
  ItemText,
  ItemSeparator,
  SelectedText,
} from './styles';

interface Props<T> {
  style?: ViewStyle;
  value: string;
  onChange?: (item: string) => void;
  placeholder?: string;
  icon: any;
  data: T;
  isEditable?: boolean;
}

export const Select: FC<Props<typeof genders>> = (props) => {
  const { style, value, onChange, icon: Icon, placeholder, data, isEditable = true } = props;

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

  const onPressSelectItem = (item: string) => {
    if (onChange) {
      onChange(item);
      setIsOpen(false);
    }
  };

  return (
    <Container style={style}>
      <Wrapper testID="Select.Wrapper" enabled={isEditable} onPress={onPressOpenSelect}>
        <Icon />
        {value ? (
          <ItemText style={{ marginLeft: 16, fontSize: fontSizeValue(20) }} isEditable={isEditable}>
            {value}
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

      {isOpen && (
        <List>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Item onPress={() => onPressSelectItem(item.name)}>
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
    </Container>
  );
};
