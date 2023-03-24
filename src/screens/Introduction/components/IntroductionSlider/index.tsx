import { FC } from "react";

import { useSettings } from "@hooks/useSettings";

import { introductionSlider } from "@utils/introductionSlider";
import { SCREEN_WIDTH } from "@utils/globalVariables";

import {
  Container,
  SvgWrapper,
  TextWrapper,
  Title,
  DescriptionWrapper,
  Description,
} from "./styles";

import IntroductionSlide1 from "@assets/svg/introduction_slide_1.svg";
import IntroductionSlide2 from "@assets/svg/introduction_slide_2.svg";
import IntroductionSlide3 from "@assets/svg/introduction_slide_3.svg";
import IntroductionSlide4 from "@assets/svg/introduction_slide_4.svg";

interface Props {
  data: typeof introductionSlider[0];
}

export const IntroductionSlider: FC<Props> = (props) => {
  const { id, title, description } = props.data;

  const { fontSizeValue } = useSettings();

  const RenderSvg: FC = () => {
    switch (id) {
      case "1": {
        return <IntroductionSlide1 width={SCREEN_WIDTH} />;
      }
      case "2": {
        return <IntroductionSlide2 width={SCREEN_WIDTH} />;
      }
      case "3": {
        return <IntroductionSlide3 width={SCREEN_WIDTH} />;
      }
      case "4": {
        return <IntroductionSlide4 width={SCREEN_WIDTH} />;
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
        <Title style={{ fontSize: fontSizeValue(40) }} numberOfLines={1}>
          {title}
        </Title>

        <DescriptionWrapper>
          <Description
            style={{ fontSize: fontSizeValue(20) }}
            numberOfLines={3}
          >
            {description}
          </Description>
        </DescriptionWrapper>
      </TextWrapper>
    </Container>
  );
};
