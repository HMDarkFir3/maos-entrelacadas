import { useState, FC } from 'react';
import { ViewStyle } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { useSettings } from '@hooks/useSettings';

import { formatDate } from '@utils/formatDate';

import { Container, Wrapper, Date, Placeholder, ErrorText } from './styles';

interface Props {
  testDateTimePickerModalID?: string;
  style?: ViewStyle;
  control: any;
  datePickerName: string;
  dirtyValue: string;
  error: string | undefined;
  placeholder?: string;
  icon: any;
  isEditable?: boolean;
}

export const DatePicker: FC<Props> = (props) => {
  const {
    testDateTimePickerModalID,
    style,
    control,
    datePickerName,
    dirtyValue,
    error,
    icon: Icon,
    placeholder,
    isEditable = true,
  } = props;

  const { fontSizeValue } = useSettings();

  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const onPressOpenDatePicker = () => setIsOpenDatePicker((prevState) => !prevState);

  const onCancelDatePicker = () => setIsOpenDatePicker((prevState) => !prevState);

  return (
    <Container
      testID="DatePicker"
      style={style}
      disabled={!isEditable}
      onPress={onPressOpenDatePicker}
    >
      <Wrapper error={!!error}>
        <Icon />

        {dirtyValue ? (
          <Date style={{ fontSize: fontSizeValue(20) }} isEditable={isEditable}>
            {formatDate(dirtyValue)}
          </Date>
        ) : (
          <Placeholder style={{ fontSize: fontSizeValue(20) }}>
            {placeholder ?? 'Selecione uma data'}
          </Placeholder>
        )}

        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <DateTimePickerModal
              testID={testDateTimePickerModalID}
              isVisible={isOpenDatePicker}
              mode="date"
              onConfirm={(date: Date) => {
                onChange(date);
                setIsOpenDatePicker(false);
              }}
              onCancel={onCancelDatePicker}
              locale="pt_BR"
            />
          )}
          name={datePickerName}
        />
      </Wrapper>

      {error && <ErrorText style={{ fontSize: fontSizeValue(16) }}>{error}</ErrorText>}
    </Container>
  );
};
