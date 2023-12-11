import {Animated, Dimensions, StyleSheet} from 'react-native';
import {CoalitionName, CustomTheme} from '../../constants/theme';
import {percentage} from '../../utils/percentage';
import {padding} from '../../utils/padding';
import {margin} from '../../utils/margin';

const wh = Dimensions.get('window').height;

export default (
  theme: CustomTheme,
  coalition: CoalitionName,
  historyHeight: Animated.Value,
  transitionY: Animated.Value,
) =>
  StyleSheet.create({
    scrollView: {
      ...padding(50, 20, 20, 20),
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-start',
      height: 'auto',
    },
    justifyCenter: {
      flex: 1,
    },
    avatarImage: {
      borderRadius: 100,
      height: percentage(20, wh),
      width: percentage(20, wh),
    },
    avatarBorder: {
      borderRadius: 100,
      // --------------
      borderWidth: 5,
      borderColor: theme.colors.bgPrimary,
      // -----------
      elevation: 10,
      shadowColor: theme.colors.boxShadow,
      shadowOffset: {
        width: 0,
        height: 21,
      },
      shadowOpacity: 1,
      shadowRadius: 59,
    },
    fullName: {
      color: theme.colors.primaryText,
      fontFamily: 'Consola-Bold',
      fontSize: 25,
      marginTop: 15,
    },
    username: {
      color: theme.colors.primaryText,
      fontFamily: 'Consola-Regular',
      fontSize: 20,
    },
    headerContentWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      ...padding(8, 0),
    },
    headerTextTitle: {
      color: theme.colors.coalition[coalition],
      textAlign: 'center',
      fontFamily: 'Consola-Regular',
    },
    headerTextData: {
      color: theme.colors.primaryText,
      textAlign: 'center',
      fontFamily: 'Consola-Regular',
    },
    userCoordinates: {
      display: 'flex',
      alignItems: 'center',
      ...padding(10, 0, 15, 0),
    },
    coalitionLogo: {
      position: 'absolute',
      height: 50,
      width: 50,
      left: 0,
      borderTopLeftRadius: 8,
    },
    location: {
      fontSize: 35,
      color: theme.colors.coalition[coalition],
      fontFamily: 'Consola-Bold',
      paddingBottom: 10,
    },
    coordinateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      ...padding(3, 0),
    },
    coordinateIcon: {
      color: theme.colors.coalition[coalition],
      marginRight: 10,
    },
    coordinateText: {
      color: theme.colors.primaryText,
      fontSize: 15,
      fontFamily: 'Consola-Regular',
    },
    historyTitle: {
      fontSize: 25,
      color: theme.colors.coalition[coalition],
      fontFamily: 'Consola-Bold',
      paddingBottom: 10,
      textAlign: 'center',
      marginRight: 10,
    },
    expandIcon: {
      color: theme.colors.coalition[coalition],
      padding: 0,
      margin: 0,
    },
    scrollableContainer: {
      backgroundColor: theme.colors.bgSecondary,
      borderRadius: 4,
      ...padding(8, 0),
    },
    logContainer: {
      minHeight: 25,
      // height: 25,
      flexDirection: 'row',
      ...padding(5, 5),
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    host: {
      ...padding(0, 1),
      // marginRight: 15,
      backgroundColor: `${theme.colors.coalition[coalition]}77`,
      textAlign: 'center',
      width: 60,
      borderRadius: 3,
      fontSize: 12,
    },
    time: {
      fontFamily: 'Consola-Regular',
      color: theme.colors.secondaryText,
      fontSize: 10,
      ...margin(0, 2),
      textAlign: 'center',
    },
    animClass: {
      width: '100%',
      height: historyHeight as unknown as number,
      transform: [
        {
          translateY: transitionY as unknown as number,
        },
      ],
    },
    themeBox: {
      marginTop: 15,
      ...padding(15, 15),
      width: '100%',
      backgroundColor: theme.colors.bgPrimary,
      borderRadius: 8,

      elevation: 10,
      shadowColor: theme.colors.boxShadow,
      shadowOffset: {
        width: 0,
        height: 21,
      },
      shadowOpacity: 1,
      shadowRadius: 59,
    },
    timeContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '37%',
      justifyContent: 'center',
    },
    targettingContainer: {
      ...padding(0, 0),
      overflow: 'hidden',
    },
    targettingContents: {
      height: 100,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    divider: {
      height: '80%',
      borderRightWidth: 1,
      borderRightColor: 'grey',
    },
  });
