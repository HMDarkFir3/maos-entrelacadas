import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { GenderNeuter, Cake, ArrowRight } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { setEmptyFields, setGenderField, setBirthdateField } from '@store/auth/actions';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Select } from '@components/Inputs/Select';
import { DatePicker } from '@components/Inputs/DatePicker';
import { SmallButton } from '@components/Buttons/SmallButton';

import { InputBlurButton, Container, InputWrapper, Footer } from '../../styles';

export const StepTwo: FC = () => {
  const dispatch = useAppDispatch();
  const { gender, birthdate } = useAppSelector((store) => store.auth);
  const { genders } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNextStep = () => {
    if (!gender || !birthdate) return;

    navigate('StepThree');
  };

  const onPressBackButton = () => dispatch(setEmptyFields());

  return (
    <InputBlurButton>
      <Container>
        <Header
          testID="StepTwo.Header"
          title="Crie sua conta!"
          description="Selecione seu gênero e preecha sua data de nascimento."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Select
            style={{ marginBottom: 32 }}
            value={gender}
            onChange={(item: string) => dispatch(setGenderField(item))}
            icon={() => (
              <GenderNeuter size={fontSizeValue(24)} color={colors.components.select.placeholder} />
            )}
            placeholder="Gênero"
            data={genders}
          />

          <DatePicker
            testDateTimePickerModalID="StepTwo.DatePicker"
            value={birthdate}
            onChange={(date: Date) => dispatch(setBirthdateField(date.toISOString()))}
            icon={() => (
              <Cake size={fontSizeValue(24)} color={colors.components.datePicker.placeholder} />
            )}
            placeholder="Data de Nascimento"
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            testID="StepTwo.SmallButton"
            icon={() => (
              <ArrowRight
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )}
            onPress={onPressNextStep}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
