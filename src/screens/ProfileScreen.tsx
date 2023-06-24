import { useTheme } from '@react-navigation/native';
import React from 'react'
import BackgroundWall from '../common-components/BackgroundWall';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native';
import styles from './styles/Profile'
import { CustomTheme } from '../constants/theme';

const staticAvatarImage = 'https://cdn.intra.42.fr/users/a30e79f01cb80c11ff1217906e1b08f7/anel-bou.jpg'
const staticUserFullName= 'Anas El boudali'
const staticUsername = 'anel-bou'

const ProfileScreen = (): JSX.Element => {
    const theme = useTheme() as CustomTheme;

    const st = styles(theme)

    return (
        <BackgroundWall>
            <View style={{ flex: 1, display: 'flex' }}>
                <ScrollView contentContainerStyle={st.scrollView}>
                    <View style={st.avatarBorder}>
                        <Image
                            style={st.avatarImage}
                            source={{ uri: staticAvatarImage }}
                        />
                    </View>
                </ScrollView>
            </View>
        </BackgroundWall>
    )
}

export default ProfileScreen