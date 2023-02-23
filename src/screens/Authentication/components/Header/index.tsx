import { FC } from "react";

import { BackButton } from "@components/BackButton";

import { Container, Wrapper, Logo, Title, Description } from "./styles";

interface Props {
  title: string;
  description: string;
}

export const Header: FC<Props> = (props) => {
  const { title, description } = props;

  return (
    <Container>
      <Wrapper>
        <BackButton />
        <Logo source={require("@assets/img/logo.png")} />
      </Wrapper>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
