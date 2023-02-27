import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { GenderNeuter, Cake, ArrowRight } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepTwo: FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNextStep = () => navigate("StepThree");

  return (
    <InputBlurButton>
      <Container>
        <Header
          title="Crie sua conta!"
          description="Selecione seu gênero e preecha sua data de nascimento."
        />

        <InputWrapper>
          <Select
            style={{ marginBottom: 32 }}
            icon={() => (
              <GenderNeuter
                size={24}
                color={colors.components.select.placeholder}
              />
            )}
            placeholder="Gênero"
          />

          <Input
            icon={() => (
              <GenderNeuter
                size={24}
                color={colors.components.select.placeholder}
              />
            )}
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            icon={() => (
              <ArrowRight
                color={colors.components.smallButton.icon}
                weight="bold"
                size={24}
              />
            )}
            onPress={onPressNextStep}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
