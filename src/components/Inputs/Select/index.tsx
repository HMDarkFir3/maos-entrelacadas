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
  placeholder: string;
  icon: any;
  data: T;
}

export const Select: FC<Props<typeof genders>> = (props) => {
  const { style, icon: Icon, placeholder, data } = props;

  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

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

  const onPressSelectItem = (item: string) => setSelected(item);

  return (
    <Container style={style}>
      <Wrapper activeOpacity={0.7} onPress={onPressOpenSelect}>
        <Icon />
        {selected ? (
          <ItemText selected style={{ marginLeft: 16 }}>
            {selected}
          </ItemText>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}

        <CaretWrapper style={caretWrapperAnimatedStyle}>
          <CaretDown size={16} color={colors.components.select.primary} />
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
                <ItemText selected={item.name === selected}>
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
