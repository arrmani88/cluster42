import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

interface AppThemeInterface {
    darkTheme: CustomTheme;
    lightTheme: CustomTheme;
}

const AppTheme: AppThemeInterface = {

    // ---------------------- LIGHT THEME ----------------------
    lightTheme: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#FFFFFF',
            bgPrimary: '#252B3D',
            bgSecondary: '#F1F3F6',
            primaryText: '#ffffff'
        },
    },

    // ---------------------- DARK THEME ----------------------
    darkTheme: {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: '#3D6670',
            bgPrimary: '#ffffff',
            bgSecondary: '#101729',
            primaryText: '#ffffff',
        },
    },
};

export interface CustomTheme extends Theme {
    colors: Theme['colors'] & {
        bgPrimary: string
        bgSecondary: string
        primaryText: string
    }
}

export default AppTheme