import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { GenderNeuter, Cake, ArrowRight } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Select } from "@components/Inputs/Select";
import { DatePicker } from "@components/Inputs/DatePicker";
import { SmallButton } from "@components/Buttons/SmallButton";

import { genders } from "@utils/genders";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepTwo: FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNextStep = () => navigate("StepThree");

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("dark");
    }, [])
  );

  return (
    <InputBlurButton>
      <Container>
        <StatusBar
          backgroundColor={colors.statusBar.backgroundPrimary}
          style="dark"
        />

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
            data={genders}
          />

          <DatePicker
            icon={() => (
              <Cake
                size={24}
                color={colors.components.datePicker.placeholder}
              />
            )}
            placeholder="Data de Nascimento"
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
