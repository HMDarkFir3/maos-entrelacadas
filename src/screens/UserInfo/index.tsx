import { FC } from "react";
import { useTheme } from "styled-components/native";
import {
  UserSquare,
  User,
  EnvelopeSimple,
  GenderNeuter,
  Cake,
  LockOpen,
} from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { Header } from "@components-of-screens/UserInfo/components/Header";
import { Input } from "@components/Inputs/Input";
import { Select } from "@components/Inputs/Select";
import { DatePicker } from "@components/Inputs/DatePicker";

import { genders } from "@utils/genders";

import { Container, Wrapper } from "./styles";

export const UserInfo: FC = () => {
  const { state: authState } = useAuth();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <Header />

      <Wrapper>
        <Input
          icon={() => (
            <UserSquare
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          defaultValue="Associado"
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => (
            <User
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          defaultValue={authState.user?.given_name}
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => (
            <EnvelopeSimple
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          defaultValue={authState.user?.email}
          isEditable={false}
        />

        <Select
          style={{ marginTop: 20 }}
          data={genders}
          icon={() => (
            <GenderNeuter
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          value={authState.user?.gender ?? "Selecione um gênero"}
          placeholder="Selecione um gênero"
          isEditable={false}
        />

        <DatePicker
          style={{ marginTop: 20 }}
          icon={() => (
            <Cake
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          value={authState.user?.birthdate ?? new Date()}
          placeholder="Selecione sua data de nascimento"
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => (
            <LockOpen
              size={fontSizeValue(24)}
              color={colors.components.input.placeholder}
            />
          )}
          defaultValue="************"
          isEditable={false}
        />
      </Wrapper>
    </Container>
  );
};
