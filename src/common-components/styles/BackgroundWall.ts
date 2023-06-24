import {Dimensions, StyleSheet} from 'react-native';
import {CustomTheme} from '../../constants/theme';
import {percentage} from '../../utils/percentage';

// const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

export default (theme: CustomTheme) =>
  StyleSheet.create({
    imagesContainer: {
      position: 'absolute',
      backgroundColor: theme.colors.bgSecondary,
      height: '100%',
      width: '100%',
    },
    rightImage: {
      left: 0,
      top: 50,
      height: percentage(30, wh),
      width: percentage(17, wh),
      color: theme.colors.logoSecondary,
      position: 'absolute',
    },
    leftImage: {
      right: 0,
      bottom: 50,
      height: percentage(30, wh),
      width: percentage(17, wh),
      color: theme.colors.logoSecondary,
      position: 'absolute',
    },
  });
