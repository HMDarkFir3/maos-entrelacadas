import { useState, FC } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TextAa } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { changeFontSize } from '@store/settings/actions';
import { FontSizeData } from '@store/settings/types';

import { typeFonts } from '@utils/typeFonts';

import { Container, Wrapper, Title, SelectedFont, List, Item, ItemText } from './styles';

export const FontSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const { fontSize } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onPressOpenFontSwitcher = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Container testID="FontSwitcher.OpenFontSwitcherButton" onPress={onPressOpenFontSwitcher}>
        <Wrapper>
          <TextAa size={fontSizeValue(24)} color={colors.icon600} weight="bold" />
          <Title style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
            Tamanho da fonte
          </Title>
        </Wrapper>

        <SelectedFont style={{ fontSize: fontSizeValue(20) }}>{fontSize.name}</SelectedFont>
      </Container>
      {isOpen && (
        <List testID="FontSwitcher.List">
          <FlatList
            data={typeFonts}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <Item
                testID="FontSwitcher.Item"
                onPress={() => {
                  const formmattedValue = {
                    name: item.name,
                    value: item.value,
                  };

                  dispatch(changeFontSize(formmattedValue as FontSizeData));
                }}
              >
                <ItemText
                  selected={item.value === fontSize.value}
                  style={{ fontSize: fontSizeValue(20) }}
                >
                  {item.name}
                </ItemText>
              </Item>
            )}
          />
        </List>
      )}
    </>
  );
};
