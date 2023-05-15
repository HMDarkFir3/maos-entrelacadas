import { FC } from 'react';
import { useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import { SCREEN_HEIGHT } from '@utils/constants';

import { Container, Wrapper, Logo, Title, Description } from './styles';

interface Props {
  testID?: string;
  title: string;
  description: string;
  keyboardShown: boolean;
  onBackButton?: () => void;
}

export const Header: FC<Props> = (props) => {
  const { testID, title, description, keyboardShown, onBackButton } = props;

  const { fontSizeValue } = useSettings();

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(keyboardShown ? 68 : SCREEN_HEIGHT / 3, { duration: 400 }),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(keyboardShown ? -100 : 0, { damping: 50 }) }],
      opacity: withTiming(keyboardShown ? 0 : 1, { duration: 300 }),
    };
  });

  return (
    <Container style={animatedContainerStyle}>
      <Wrapper>
        <BackButton testID={testID} onBackButton={onBackButton} />

        <Logo source={require('@assets/img/logo.png')} />
      </Wrapper>

      <Title style={[animatedTextStyle, { fontSize: fontSizeValue(48) }]} numberOfLines={1}>
        {title}
      </Title>

      <Description style={[animatedTextStyle, { fontSize: fontSizeValue(20) }]} numberOfLines={3}>
        {description}
      </Description>
    </Container>
  );
};
