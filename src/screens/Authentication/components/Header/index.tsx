import { FC } from "react";

import { BackButton } from "@components/Buttons/BackButton";

import { Container, Wrapper, Logo, Title, Description } from "./styles";

interface Props {
  title: string;
  description: string;
  onBackButton?: () => void;
}

export const Header: FC<Props> = (props) => {
  const { title, description, onBackButton } = props;

  return (
    <Container>
      <Wrapper>
        <BackButton onBackButton={onBackButton} />
        <Logo source={require("@assets/img/logo.png")} />
      </Wrapper>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
