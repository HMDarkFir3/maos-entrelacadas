import { useState, useRef, FC } from "react";
import { FlatList, Alert, Animated, ViewToken } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ArrowRight, Check } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import { IntroductionSlider } from "@components-of-screens/Introduction/components/IntroductionSlider";
import { IntroductionPaginator } from "@components-of-screens/Introduction/components/IntroductionPaginator";
import { SmallButton } from "@components/Buttons/SmallButton";

import { COLLECTION_INTRODUCTION } from "@storages/index";

import { introductionSlider } from "@utils/introductionSlider";
import { SCREEN_HEIGHT } from "@utils/globalVariables";

import { Container, Footer, JumpButton, Title } from "./styles";

interface ViewabilityConfigRef {
  viewAreaCoveragePercentThreshold: number;
}

export const Introduction: FC = () => {
  const { dispatch: authDispatch } = useAuth();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const introductionSliderRef = useRef<FlatList>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;
  const viewabilityConfig = useRef<ViewabilityConfigRef>({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const sawIntroductionInStorage = async () => {
    authDispatch({ type: "SET_SAW_INTRODUCTION", payload: true });
    await AsyncStorage.setItem(COLLECTION_INTRODUCTION, JSON.stringify(true));
    navigate("Welcome");
  };

  const jumpSlides = () => {
    Alert.alert("Pular Introdução!", "Deseja pular a introdução?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        style: "default",
        onPress: () => sawIntroductionInStorage(),
      },
    ]);
  };

  const scrollToNextSlide = () => {
    if (currentIndex! < introductionSlider.length - 1) {
      introductionSliderRef.current!.scrollToIndex({
        index: currentIndex! + 1,
      });
    } else {
      sawIntroductionInStorage();
    }
  };

  return (
    <Container>
      <Animated.FlatList
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
      />

      <IntroductionPaginator
        style={{ position: "absolute", bottom: SCREEN_HEIGHT / 2.21 }}
        data={introductionSlider}
        scrollX={scrollX}
      />

      <Footer>
        <JumpButton
          style={{
            opacity: currentIndex === introductionSlider.length - 1 ? 0 : 1,
          }}
          disabled={currentIndex === introductionSlider.length - 1}
          onPress={jumpSlides}
        >
          <Title>Pular</Title>
        </JumpButton>

        <SmallButton
          icon={() =>
            currentIndex === introductionSlider.length - 1 ? (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={24}
              />
            ) : (
              <ArrowRight
                color={colors.components.smallButton.icon}
                weight="bold"
                size={24}
              />
            )
          }
          onPress={scrollToNextSlide}
        />
      </Footer>
    </Container>
  );
};
