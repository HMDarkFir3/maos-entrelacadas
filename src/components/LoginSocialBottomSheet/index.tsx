import { useRef, useMemo, useCallback, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { useTheme } from 'styled-components/native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { userEdit } from '@store/auth/actions';

import {
  Container,
  Backdrop,
  Content,
  Wrapper,
  Description,
  Footer,
  Button,
  ButtonText,
} from './styles';

export const LoginSocialBottomSheet: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '35%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop {...props} disappearsOnIndex={0} appearsOnIndex={1} />
    ),
    []
  );

  const formattedGivenName: string | undefined = user?.person.name.split(' ')[0];

  const onCloseBottomSheet = () => bottomSheetRef.current?.close();
  const onNavigateToForm = () => {
    dispatch(userEdit(true));
    onCloseBottomSheet();
    navigate('UserInfo');
  };

  return (
    <Container
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={false}
      enableHandlePanningGesture={false}
      enableContentPanningGesture={false}
      enableOverDrag={false}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: colors.background }}
    >
      <Content>
        <Wrapper>
          <Description style={{ fontSize: fontSizeValue(20) }}>
            Oi {formattedGivenName} como realizou o login por meio do Google, não temos alguns
            dados, poderia prencher um formulário para nós?
          </Description>
        </Wrapper>

        <Footer>
          <Button type="primary" onPress={onNavigateToForm}>
            <ButtonText style={{ fontSize: fontSizeValue(16) }} type="primary">
              Sim
            </ButtonText>
          </Button>

          <Button type="secondary" onPress={onCloseBottomSheet}>
            <ButtonText style={{ fontSize: fontSizeValue(16) }} type="secondary">
              mais tarde
            </ButtonText>
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};
