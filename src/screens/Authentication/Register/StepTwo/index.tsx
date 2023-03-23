import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { GenderNeuter, Cake, ArrowRight } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Select } from "@components/Inputs/Select";
import { DatePicker } from "@components/Inputs/DatePicker";
import { SmallButton } from "@components/Buttons/SmallButton";

import { genders } from "@utils/genders";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepTwo: FC = () => {
  const { state: authState, dispatch: authDispatch } = useAuth();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNextStep = () => {
    if (!authState.gender) return;
    if (!authState.birthdate) return;

    navigate("StepThree");
  };

  const onPressBackButton = () => authDispatch({ type: "SET_EMPTY_FIELDS" });

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("light");
    }, [])
  );

  return (
    <InputBlurButton>
      <Container>
        <Header
          title="Crie sua conta!"
          description="Selecione seu gênero e preecha sua data de nascimento."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Select
            style={{ marginBottom: 32 }}
            value={authState.gender}
            onChange={(item: string) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "gender",
                payload: item,
              })
            }
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
            value={authState.birthdate}
            onChange={(date: Date) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "birthdate",
                payload: date,
              })
            }
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
