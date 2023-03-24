import { useState, FC } from "react";
import { ViewStyle, FlatList } from "react-native";
import {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { CaretDown } from "phosphor-react-native";

import { useSettings } from "@hooks/useSettings";

import { genders } from "@utils/genders";

import {
  Container,
  Wrapper,
  Placeholder,
  CaretWrapper,
  List,
  Item,
  ItemText,
  ItemSeparator,
} from "./styles";

interface Props<T> {
  style?: ViewStyle;
  value: string;
  onChange: (item: string) => void;
  placeholder: string;
  icon: any;
  data: T;
}

export const Select: FC<Props<typeof genders>> = (props) => {
  const { style, value, onChange, icon: Icon, placeholder, data } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const caretWrapperAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      isOpen ? 1 : 0,
      [0, 1],
      [0, 180],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ rotate: withTiming(`${rotate}deg`, { duration: 300 }) }],
    };
  });

  const onPressOpenSelect = () => setIsOpen((prevState) => !prevState);

  const onPressSelectItem = (item: string) => onChange(item);

  return (
    <Container style={style}>
      <Wrapper activeOpacity={0.7} onPress={onPressOpenSelect}>
        <Icon />
        {value ? (
          <ItemText
            style={{ marginLeft: 16, fontSize: fontSizeValue(20) }}
            selected
          >
            {value}
          </ItemText>
        ) : (
          <Placeholder style={{ marginLeft: 16, fontSize: fontSizeValue(20) }}>
            {placeholder}
          </Placeholder>
        )}

        <CaretWrapper style={caretWrapperAnimatedStyle}>
          <CaretDown
            size={fontSizeValue(16)}
            color={colors.components.select.primary}
          />
        </CaretWrapper>
      </Wrapper>

      {isOpen && (
        <List>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Item
                activeOpacity={0.7}
                onPress={() => onPressSelectItem(item.name)}
              >
                <ItemText
                  style={{ marginLeft: 16, fontSize: fontSizeValue(20) }}
                  selected={item.name === value}
                >
                  {item.name}
                </ItemText>
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
