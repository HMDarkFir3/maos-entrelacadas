import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { NotePencil, X } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import { Container, UserImage, EditButton, Box } from './styles';

interface Props {
  isEditable: boolean;
  onEdit: () => void;
  onCancelEdit: () => void;
}

export const Header: FC<Props> = (props) => {
  const { isEditable, onEdit, onCancelEdit } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <Box>
        <BackButton style={{ alignSelf: 'flex-start' }} />
      </Box>

      <UserImage source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />

      <Box style={{ alignItems: 'flex-end' }}>
        <EditButton onPress={isEditable ? onCancelEdit : onEdit}>
          {isEditable ? (
            <X size={fontSizeValue(32)} color={colors.error} />
          ) : (
            <NotePencil size={fontSizeValue(32)} color={colors.icon600} />
          )}
        </EditButton>
      </Box>
    </Container>
  );
};
