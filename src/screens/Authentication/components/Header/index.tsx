import { FC } from "react";

import { useSettings } from "@hooks/useSettings";

import { BackButton } from "@components/Buttons/BackButton";

import { Container, Wrapper, Logo, Title, Description } from "./styles";

interface Props {
  title: string;
  description: string;
  onBackButton?: () => void;
}

export const Header: FC<Props> = (props) => {
  const { title, description, onBackButton } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Wrapper>
        <BackButton onBackButton={onBackButton} />
        <Logo source={require("@assets/img/logo.png")} />
      </Wrapper>

      <Title style={{ fontSize: fontSizeValue(48) }} numberOfLines={1}>
        {title}
      </Title>
      <Description style={{ fontSize: fontSizeValue(20) }} numberOfLines={3}>
        {description}
      </Description>
    </Container>
  );
};
