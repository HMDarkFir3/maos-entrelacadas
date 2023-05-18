import { FC } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { NotePencil, X } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import { Container, UserImage, EditButton, Box } from './styles';

interface Props {
  isEditable: boolean;
  keyboardShown: boolean;
  onEdit: () => void;
  onCancelEdit: () => void;
}

export const Header: FC<Props> = (props) => {
  const { isEditable, keyboardShown, onEdit, onCancelEdit } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const animatedUserImageStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(keyboardShown ? 52 : 152, { duration: 400 }),
      height: withTiming(keyboardShown ? 52 : 152, { duration: 400 }),
    };
  });

  return (
    <Container>
      <Box>
        <BackButton style={{ alignSelf: 'flex-start' }} />
      </Box>

      <UserImage
        style={animatedUserImageStyle}
        source={{ uri: 'https://www.github.com/hmdarkfir3.png' }}
      />

      <Box style={{ alignItems: 'flex-end' }}>
        <EditButton onPress={isEditable ? onCancelEdit : onEdit}>
          {isEditable ? (
            <X size={fontSizeValue(24)} color={colors.error} />
          ) : (
            <NotePencil size={fontSizeValue(24)} color={colors.icon600} />
          )}
        </EditButton>
      </Box>
    </Container>
  );
};
