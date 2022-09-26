import * as StatusBar from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useState, useLayoutEffect, useRef, FC } from "react";
import {
  useWindowDimensions,
  FlatList,
  Alert,
  Animated,
  ViewToken,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ArrowRight, Check } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import { IntroductionSlider } from "@components/IntroductionSlider";
import { IntroductionSliderPaginator } from "@components/IntroductionSliderPaginator";
import { Button } from "@components/Button";

import { COLLECTION_INTRODUCTION } from "@storages/index";

import { introductionSlider } from "@utils/introductionSlider";

import { Container, Footer, EmptyView } from "./styles";

interface ViewabilityConfigRef {
  viewAreaCoveragePercentThreshold: number;
}

export const Introduction: FC = () => {
  const { state: authState, dispatch: authDispatch } = useAuth();

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

  const { height } = useWindowDimensions();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const setSawIntroductionInStorage = async () => {
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
        onPress: () => setSawIntroductionInStorage(),
      },
    ]);
  };

  const scrollToNextSlide = () => {
    if (currentIndex! < introductionSlider.length - 1) {
      introductionSliderRef.current!.scrollToIndex({
        index: currentIndex! + 1,
      });
    } else {
      setSawIntroductionInStorage();
    }
  };

  useLayoutEffect(() => {
    StatusBar.setStatusBarStyle("dark");
    StatusBar.setStatusBarBackgroundColor("#fafafa", true);
    NavigationBar.setBackgroundColorAsync("#fafafa");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

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

      <IntroductionSliderPaginator
        style={{ position: "absolute", bottom: height / 2.21 }}
        data={introductionSlider}
        scrollX={scrollX}
      />

      <Footer>
        {currentIndex !== introductionSlider.length - 1 ? (
          <Button type="jump" onPress={jumpSlides} />
        ) : (
          <EmptyView />
        )}

        <Button
          icon={() =>
            currentIndex === introductionSlider.length - 1 ? (
              <Check
                color={colors.components.button.icon_color}
                weight="bold"
                size={24}
              />
            ) : (
              <ArrowRight
                color={colors.components.button.icon_color}
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
