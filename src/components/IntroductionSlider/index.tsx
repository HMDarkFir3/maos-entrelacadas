import { FC } from "react";
import { useWindowDimensions } from "react-native";
import { Canvas, Path } from "@shopify/react-native-skia";
import { useTheme } from "styled-components/native";

import { introductionSlider } from "../../utils/introductionSlider";

import {
  Container,
  SvgWrapper,
  TextWrapper,
  Title,
  DescriptionWrapper,
  Description,
} from "./styles";

import IntroductionSlide1 from "../../assets/svg/introduction_slide_1.svg";
import IntroductionSlide2 from "../../assets/svg/introduction_slide_2.svg";
import IntroductionSlide3 from "../../assets/svg/introduction_slide_3.svg";
import IntroductionSlide4 from "../../assets/svg/introduction_slide_4.svg";

interface Props {
  data: typeof introductionSlider[0];
}

export const IntroductionSlider: FC<Props> = (props) => {
  const { id, title, description } = props.data;

  const { width } = useWindowDimensions();

  const RenderSvg = () => {
    switch (id) {
      case "1": {
        return <IntroductionSlide1 width={width} />;
      }
      case "2": {
        return <IntroductionSlide2 width={width} />;
      }
      case "3": {
        return <IntroductionSlide3 width={width} />;
      }
      case "4": {
        return <IntroductionSlide4 width={width} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Container>
      <SvgWrapper>
        <RenderSvg />
      </SvgWrapper>

      <TextWrapper>
        <Title>{title}</Title>

        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </TextWrapper>
    </Container>
  );
};
