import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useState, FC } from 'react';
import { ToastAndroid } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { NotePencil, X, PencilSimple } from 'phosphor-react-native';

import { api } from '@services/api';

import { setAvatarUser } from '@store/auth/actions';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import {
  Container,
  UserImageWrapper,
  UserImageButton,
  UserImage,
  UserImageEdit,
  EditButton,
  Box,
  Loading,
} from './styles';

interface Props {
  isEditable: boolean;
  keyboardShown: boolean;
  onBackButton: () => void;
  onEdit: () => void;
  onCancelEdit: () => void;
}

interface PhotoInfo {
  exists: boolean;
  isDirectory: boolean;
  modificationTime: number;
  size: number;
  uri: string;
}

export const Header: FC<Props> = (props) => {
  const { isEditable, keyboardShown, onBackButton, onEdit, onCancelEdit } = props;

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const { colors } = useTheme();

  const animatedUserImageStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(keyboardShown ? 52 : 152, { duration: 400 }),
      height: withTiming(keyboardShown ? 52 : 152, { duration: 400 }),
    };
  });

  const [image, setImage] = useState<string>(
    user?.image?.url ?? 'https://www.github.com/hmdarkfir3.png'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formattedUsername: string | undefined = user?.username.split(' ')[0];

  const changeUserImage = async () => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }

    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status === 'granted') {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4],
        base64: true,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoSelected.assets[0].uri)) as PhotoInfo;

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          ToastAndroid.show('A imagem não pode ser maior que 5MB', ToastAndroid.SHORT);
          return;
        }

        setImage(photoSelected.assets[0].uri);

        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        setIsLoading(true);

        const { data } = await api.put(`/users/updateAvatar/${user?.id}`, {
          photoFile: {
            name: `${formattedUsername}`.toLowerCase(),
            uri: photoSelected.assets[0].base64,
            ext: fileExtension,
          },
        });

        dispatch(setAvatarUser(data));
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <Box>
        <BackButton style={{ alignSelf: 'flex-start' }} onBackButton={onBackButton} />
      </Box>

      <UserImageWrapper>
        {isEditable && (
          <UserImageEdit>
            {isLoading ? (
              <Loading size="small" color={colors.icon40} />
            ) : (
              <PencilSimple size={fontSizeValue(20)} color={colors.icon40} />
            )}
          </UserImageEdit>
        )}

        <UserImageButton disabled={!isEditable} onPress={changeUserImage}>
          <UserImage
            style={animatedUserImageStyle}
            source={user?.image?.url ? { uri: image } : require('@assets/img/empty.png')}
          />
        </UserImageButton>
      </UserImageWrapper>

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
