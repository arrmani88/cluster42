import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import styles from './styles/ThemeBox'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '../constants/theme'

interface Props {
    children: ReactNode;
    style?: StyleProp<TextStyle>
}

const ThemeBox = ({ children, style }: Props): JSX.Element => {
    const theme = useTheme() as CustomTheme
    const st = styles(theme)

    return <View style={[st.container, StyleSheet.flatten(style)]}>
        {children}
    </View>
}

export default ThemeBox