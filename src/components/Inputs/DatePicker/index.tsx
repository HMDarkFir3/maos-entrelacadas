import { useState, FC } from "react";
import { ViewStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { formatDate } from "@utils/formatDate";

import { Container, Date, Placeholder } from "./styles";

interface Props {
  style?: ViewStyle;
  placeholder: string;
  icon: any;
}

export const DatePicker: FC<Props> = (props) => {
  const { style, icon: Icon, placeholder } = props;

  const [date, setDate] = useState<Date | null>(null);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const onPressOpenDatePicker = () =>
    setIsOpenDatePicker((prevState) => !prevState);

  const onChangeDate = (date: Date) => {
    setDate(date);
    setIsOpenDatePicker(false);

    console.log(date);
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

      {date ? (
        <Date>{formatDate(date)}</Date>
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
