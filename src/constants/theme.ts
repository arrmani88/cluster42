import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';

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
      primary: '#3D6670',
      bgPrimary: '#ffffff',
      bgSecondary: '#F1F3F6',
      primaryText: '#ffffff',
      secondaryText: '#375A63',
      statusBarBackground: '#F1F3F6',
      logoSecondary: 'rgba(61, 102, 112, 0.2)',
      coalition: {
        freax: '#EBBE54',
        bios: '#A52A7F',
        commodore: '#345921',
        pandora: '#62CACF',
      },
    },
  },

  // ---------------------- DARK THEME ----------------------
  darkTheme: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#3D6670',
      bgPrimary: '#252B3D',
      bgSecondary: '#101729',
      primaryText: '#ffffff',
      secondaryText: '#ffffff',
      statusBarBackground: '#101729',
      logoSecondary: 'rgba(255, 255, 255, 0.2)',
      coalition: {
        freax: '#EBBE54',
        bios: '#A52A7F',
        commodore: '#345921',
        pandora: '#62CACF',
      },
    },
  },
};

export interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    bgPrimary: string;
    bgSecondary: string;
    primaryText: string;
    secondaryText: string;
    statusBarBackground: string;
    logoSecondary: string;
    coalition: {
      freax: string;
      commodore: string;
      bios: string;
      pandora: string;
    };
  };
}

export default AppTheme;
