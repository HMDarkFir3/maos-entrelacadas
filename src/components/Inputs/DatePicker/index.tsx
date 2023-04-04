import { useState, FC } from 'react';
import { ViewStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { useSettings } from '@hooks/useSettings';

import { formatDate } from '@utils/formatDate';

import { Container, Date, Placeholder } from './styles';

interface Props {
  testDateTimePickerModalID?: string;
  style?: ViewStyle;
  value: string | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
  icon: any;
  isEditable?: boolean;
}

export const DatePicker: FC<Props> = (props) => {
  const {
    testDateTimePickerModalID,
    style,
    value,
    onChange,
    icon: Icon,
    placeholder,
    isEditable = true,
  } = props;

  const { fontSizeValue } = useSettings();

  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const onPressOpenDatePicker = () => setIsOpenDatePicker((prevState) => !prevState);

  const onChangeDate = (date: Date) => {
    if (onChange) {
      onChange(date);
      setIsOpenDatePicker(false);
    }
  };

  const onCancelDatePicker = () => setIsOpenDatePicker((prevState) => !prevState);

  return (
    <Container
      testID="DatePicker"
      style={style}
      enabled={isEditable}
      onPress={onPressOpenDatePicker}
    >
      <Icon />

      {value ? (
        <Date style={{ fontSize: fontSizeValue(20) }} isEditable={isEditable}>
          {formatDate(value)}
        </Date>
      ) : (
        <Placeholder style={{ fontSize: fontSizeValue(20) }}>
          {placeholder ?? 'Selecione uma data'}
        </Placeholder>
      )}

      <DateTimePickerModal
        testID={testDateTimePickerModalID}
        isVisible={isOpenDatePicker}
        mode="date"
        onConfirm={onChangeDate}
        onCancel={onCancelDatePicker}
        locale="pt_BR"
      />
    </Container>
  );
};
