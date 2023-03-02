import { useState, FC } from "react";
import { ViewStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { formatDate } from "@utils/formatDate";

import { Container, Date, Placeholder } from "./styles";

interface Props {
  style?: ViewStyle;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder: string;
  icon: any;
}

export const DatePicker: FC<Props> = (props) => {
  const { style, value, onChange, icon: Icon, placeholder } = props;

  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const onPressOpenDatePicker = () =>
    setIsOpenDatePicker((prevState) => !prevState);

  const onChangeDate = (date: Date) => {
    onChange(date);
    setIsOpenDatePicker(false);
  };

  const onCancelDatePicker = () =>
    setIsOpenDatePicker((prevState) => !prevState);

  return (
    <Container
      style={style}
      activeOpacity={0.7}
      onPress={onPressOpenDatePicker}
    >
      <Icon />

      {value ? (
        <Date>{formatDate(value)}</Date>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}

      <DateTimePickerModal
        isVisible={isOpenDatePicker}
        mode="date"
        onConfirm={onChangeDate}
        onCancel={onCancelDatePicker}
        locale="pt_BR"
      />
    </Container>
  );
};
