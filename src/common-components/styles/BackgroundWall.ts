import {Dimensions, StyleSheet} from 'react-native';
import {CustomTheme} from '../../constants/theme';
import {percentage} from '../../utils/percentage';

const ww = Dimensions.get('window').width;
// const wh = Dimensions.get('window').height;

export default (theme: CustomTheme) =>
  StyleSheet.create({
    imagesContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: 100,
      backgroundColor: theme.colors.bgSecondary,
    },
    leftImage: {
      left: 0,
      top: 60,
      width: percentage(60, ww),
      aspectRatio: 1,
      color: theme.colors.logoSecondary,
      marginBottom: 100,
      position: 'absolute',
    },
    rightImage: {
      // right: 0,
      right: -120,
      bottom: 110,
      width: percentage(60, ww),
      aspectRatio: 1,
      color: theme.colors.logoSecondary,
      position: 'absolute',
    },
  });
