import {StyleSheet} from 'react-native';
import {padding} from '../../utils/padding';
import {percentage} from '../../utils/percentage';
import {Dimensions} from 'react-native';
import {CustomTheme} from '../../constants/theme';

const ww = Dimensions.get('window').width;
// const wh = Dimensions.get('window').height;

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    scroller: {
      backgroundColor: theme.colors.bgSecondary,
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: percentage(60, ww),
      aspectRatio: 1,
      color: theme.colors.primary,
    },
    progressBarContainer: {
      width: ww,
      ...padding(0, percentage(20, ww)),
      position: 'absolute',
      bottom: percentage(40, ww),
    },
    creditsText: {
      position: 'absolute',
      color: theme.colors.primary,
      textAlign: 'center',
      fontSize: 13,
      bottom: percentage(20, ww),
    },
    button: {
      backgroundColor: theme.colors.primary,
      ...padding(10, 40),
      borderRadius: 15,
    },
    textButton: {
      fontSize: 16,
      color: theme.colors.primaryText,
    },
  });
