import { useState, useRef, FC } from 'react';
import { FlatList, Alert, Animated, ViewToken } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ArrowRight, Check } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { IntroductionSlider } from '@components-of-screens/Introduction/components/IntroductionSlider';
import { IntroductionPaginator } from '@components-of-screens/Introduction/components/IntroductionPaginator';
import { SmallButton } from '@components/Buttons/SmallButton';

import { introductionSlider } from '@utils/introductionSlider';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@utils/globalVariables';

import { Container, Footer, JumpButton, JumpButtonWrapper, Title } from './styles';

interface ViewabilityConfigRef {
  viewAreaCoveragePercentThreshold: number;
}

export const Introduction: FC = () => {
  const { sawIntroductionInStorage, fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const introductionSliderRef = useRef<FlatList>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewabilityConfig = useRef<ViewabilityConfigRef>({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const jumpSlides = () => {
    Alert.alert('Pular Introdução!', 'Deseja pular a introdução?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'default',
        onPress: async () => {
          await sawIntroductionInStorage();
          navigate('Welcome');
        },
      },
    ]);
  };

  const scrollToNextSlide = async () => {
    if (currentIndex! < introductionSlider.length - 1) {
      introductionSliderRef.current?.scrollToIndex({
        index: currentIndex! + 1,
      });
    } else {
      await sawIntroductionInStorage();
      navigate('Welcome');
    }
  };

  return (
    <Container>
      <Animated.FlatList
        testID="Introduction.FlatList"
        ref={introductionSliderRef}
        data={introductionSlider}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <IntroductionSlider data={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => {
          return {
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index,
          };
        }}
      />

      <IntroductionPaginator
        style={{ position: 'absolute', bottom: SCREEN_HEIGHT / 2.21 }}
        data={introductionSlider}
        scrollX={scrollX}
      />

      <Footer>
        <JumpButton
          testID="Introduction.JumpButton"
          style={{
            opacity: currentIndex === introductionSlider.length - 1 ? 0 : 1,
          }}
        >
          <JumpButtonWrapper
            enabled={currentIndex !== introductionSlider.length - 1}
            onPress={jumpSlides}
          >
            <Title style={{ fontSize: fontSizeValue(16) }}>Pular</Title>
          </JumpButtonWrapper>
        </JumpButton>

        <SmallButton
          testID="Introduction.SmallButton"
          icon={() =>
            currentIndex === introductionSlider.length - 1 ? (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            ) : (
              <ArrowRight
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )
          }
          onPress={scrollToNextSlide}
        />
      </Footer>
    </Container>
  );
};
