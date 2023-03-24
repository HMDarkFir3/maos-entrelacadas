import { useState, FC } from "react";
import { ViewStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useSettings } from "@hooks/useSettings";

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

  const { fontSizeValue } = useSettings();

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
        <Date style={{ fontSize: fontSizeValue(20) }}>{formatDate(value)}</Date>
      ) : (
        <Placeholder style={{ fontSize: fontSizeValue(20) }}>
          {placeholder}
        </Placeholder>
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
