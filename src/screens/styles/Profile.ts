import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';
import { CustomTheme } from '../../constants/theme';
import { percentage } from '../../utils/percentage';
import { padding } from '../../utils/padding';

const wh = Dimensions.get('window').height;

export default (theme: CustomTheme) => StyleSheet.create({
    avatarImage: {
        borderRadius: 100,
        height: percentage(20, wh),
        width: percentage(20, wh),
    },
    avatarBorder: {
        borderWidth: 5,
        borderRadius: 100,
        borderColor: theme.colors.bgPrimary,
    },
    scrollView: {
        ...padding(50, 10, 20, 10),
        alignItems: 'center'
    }
})