import { FC } from "react";
import { Animated, ViewProps } from "react-native";

import { introductionSlider } from "@utils/introductionSlider";
import { SCREEN_WIDTH } from "@utils/globalVariables";

import { Container, Dot } from "./styles";

interface Props extends ViewProps {
  data: typeof introductionSlider;
  scrollX: Animated.Value;
}

export const IntroductionPaginator: FC<Props> = (props) => {
  const { data, scrollX, ...rest } = props;

  return (
    <Container {...rest}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ];

        const scaleX = scrollX.interpolate({
          inputRange,
          outputRange: [1, 2, 1],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Dot style={{ transform: [{ scaleX }], opacity }} key={item.id} />
        );
      })}
    </Container>
  );
};
