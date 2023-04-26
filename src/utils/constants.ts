import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = getStatusBarHeight();

export { SCREEN_WIDTH, SCREEN_HEIGHT, STATUS_BAR_HEIGHT };
