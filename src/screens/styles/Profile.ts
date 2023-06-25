import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';
import { CoalitionName, CustomTheme } from '../../constants/theme';
import { percentage } from '../../utils/percentage';
import { padding } from '../../utils/padding';
import { margin } from '../../utils/margin';

const wh = Dimensions.get('window').height;

export default (theme: CustomTheme, coalition: CoalitionName) => StyleSheet.create({
    scrollView: {
        ...padding(50, 20, 20, 20),
        alignItems: 'center'
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
        fontFamily: 'consolab',
        fontSize: 25,
        marginTop: 15
    },
    username: {
        color: theme.colors.primaryText,
        fontFamily: 'consola',
        fontSize: 20,
    },
    headerContentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...padding(8, 0)
    },
    headerTextTitle: {
        color: (theme.colors.coalition[coalition]),
        textAlign: 'center',
        fontFamily: 'consola'
    },
    headerTextData: {
        color: theme.colors.primaryText,
        textAlign: 'center',
        fontFamily: 'consola'
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
        borderTopLeftRadius: 8
    },
    location: {
        fontSize: 35,
        color: theme.colors.coalition[coalition],
        fontFamily: 'consolab',
        paddingBottom: 10
    },
    coordinateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        ...padding(3, 0)
    },
    coordinateIcon: {
        color: theme.colors.coalition[coalition],
        marginRight: 10
    },
    coordinateText: {
        color: theme.colors.primaryText,
        fontSize: 15,
        fontFamily: 'consola'
    },
    historyTitle: {
        fontSize: 25,
        color: theme.colors.coalition[coalition],
        fontFamily: 'consolab',
        paddingBottom: 10,
        textAlign: 'center'
    },
    scrollableContainer: {
        height: 210,
        backgroundColor: theme.colors.bgSecondary,
        borderRadius: 4,
        ...padding(8, 0),
    },
    logContainer: {
        flexDirection: 'row',
        ...padding(5, 5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    host: {
        ...padding(0, 1),
        backgroundColor: `${theme.colors.coalition[coalition]}77`,
        textAlign: 'center',
        width: 60,
        borderRadius: 3,
        fontSize: 12
    },
    time: {
        fontFamily: 'consola',
        color: theme.colors.secondaryText,
        fontSize: 10,
        ...margin(0, 4)
    }
})
