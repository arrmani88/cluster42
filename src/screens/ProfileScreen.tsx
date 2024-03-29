import {useTheme} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import BackgroundWall from '../common-components/BackgroundWall';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native';
import styles from './styles/Profile';
import {CustomTheme} from '../constants/theme';
import ThemeBox from '../common-components/ThemeBox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {percentage} from '../utils/percentage';
import {padding} from '../utils/padding';

// const staticAvatarImage = 'https://cdn.intra.42.fr/users/a30e79f01cb80c11ff1217906e1b08f7/anel-bou.jpg'
const staticAvatarImage =
  'https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/317411499_2411854758970767_3524964030019514981_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeECnQgA2BnvN0Ac4eMX4lcXf_1K6ReVnhp__UrpF5WeGsXaEgcSVyLuSSkMAqckgauTqc5BXL6q6_xBSaj7gOX4&_nc_ohc=oFc0Ujnm8KUAX-9V3VD&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfDzunBQoCeaKnaLSJ9q3SsbKFHcHiuWraP2hAadlcm4gw&oe=649B6D04';
const staticUserFullName = 'Anas El boudali';
const staticUsername = 'anel-bou';
const staticHeaderData = [
  {title: 'Level', value: 19.89},
  {title: 'Logtime', value: 137},
  {title: 'Points', value: 5},
  {title: 'Wallet', value: 999},
];
const staticUserCoordinates = [
  {icon: 'close', value: '2024-08-15 (417 Days)'},
  {icon: 'alternate-email', value: 'arrmani88@student.1337.ma'},
  {icon: 'phone', value: '+212 6 64 64 61 25'},
  {icon: 'location-pin', value: '1337 Khouribga'},
];
const staticCoalition = 'freax';
const staticLocation = 'e2r6p7';
const staticHistory = () => {
  return {
    host: `e${Math.floor(Math.random() * 2)}r${Math.floor(
      Math.random() * 15,
    )}p${Math.floor(Math.random() * 12)}`,
    fromDate: '2023-08-22',
    toDate: '2023-08-22',
    fromHour: '18:02:44',
    toHour: '19:59:08',
  };
};

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;

const ProfileScreen = (): JSX.Element => {
  const theme = useTheme() as CustomTheme;
  const [isHistoryExpanded, setIsHistoryExpanded] = useState<boolean>(false);
  const [historyPositionY, setHistoryPositionY] = useState<number>(0);

  const historyHeight = useRef(new Animated.Value(250)).current;
  const transitionY = useRef(new Animated.Value(0)).current;
  const historyRef = useRef(null);

  const st = styles(theme, staticCoalition, historyHeight, transitionY);

  const handleExpandHistory = () => {
    Animated.timing(historyHeight, {
      toValue: percentage(90, wh),
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(transitionY, {
      toValue: -historyPositionY + percentage(4, wh),
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsHistoryExpanded(true);
  };
  const handleCollapseHistory = () => {
    Animated.timing(historyHeight, {
      toValue: 250,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(transitionY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsHistoryExpanded(false);
    setTimeout(() => {
      // @ts-ignore
      historyRef?.current?.scrollTo({y: historyPositionY, animated: true});
    }, 200);
  };

  return (
    // <BackgroundWall>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            ...st.scrollView,
            ...(isHistoryExpanded && st.justifyCenter),
          }}
          ref={historyRef}>
          <View style={st.avatarBorder}>
            <Image style={st.avatarImage} source={{uri: staticAvatarImage}} />
          </View>
          <Text style={st.fullName}>{staticUserFullName}</Text>
          <ThemeBox style={st.targettingContainer}>
            <View style={st.targettingContents}>
              <View style={{ flex: 1,width: '50%' }} ></View>
              <View style={st.divider} />
              <View style={{ flex: 1,width: '50%' }} ></View>
            </View>
          </ThemeBox>
          {/* <Text style={st.username}>{staticUsername}</Text> */}
          <ThemeBox style={st.headerContentWrapper}>
            {staticHeaderData.map((item, ndx) => (
              <View style={{flexDirection: 'column'}} key={ndx}>
                <Text style={st.headerTextTitle}>{item.title}</Text>
                <Text style={st.headerTextData}>{item.value}</Text>
              </View>
            ))}
          </ThemeBox>
          <ThemeBox style={st.userCoordinates}>
            <Image
              style={st.coalitionLogo}
              source={require(`../images/${staticCoalition}-logo.jpg`)}
            />
            <Text style={st.location}>{staticLocation}</Text>
            <View>
              {staticUserCoordinates.map((item, ndx) => (
                <View style={st.coordinateContainer} key={ndx}>
                  <Icon style={st.coordinateIcon} size={20} name={item.icon} />
                  <Text style={st.coordinateText}>{item.value}</Text>
                </View>
              ))}
            </View>
          </ThemeBox>
          <Animated.View
            style={{...st.animClass, ...st.themeBox}}
            onLayout={e => {
              if (historyPositionY == 0)
                setHistoryPositionY(e.nativeEvent.layout.y);
            }}>
            <TouchableOpacity
              onPress={() =>
                !isHistoryExpanded
                  ? handleExpandHistory()
                  : handleCollapseHistory()
              }>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={st.historyTitle}>Workstations history</Text>
                {isHistoryExpanded && (
                  <MCIcon
                    name="arrow-collapse"
                    size={30}
                    style={st.expandIcon}
                  />
                )}
              </View>
            </TouchableOpacity>
            <ScrollView style={st.scrollableContainer} nestedScrollEnabled>
              {[...Array(40)].map((_, ndx) => (
                <View
                  style={[
                    st.logContainer,
                    ndx % 2 ? {backgroundColor: theme.colors.bgMinor} : null,
                  ]}
                  key={ndx}>
                  <Text style={st.host}>{staticHistory().host}</Text>
                  <View style={st.timeContainer}>
                    <Text style={st.time}>{staticHistory().fromDate}</Text>
                    <Text style={st.time}>{staticHistory().fromHour}</Text>
                  </View>
                  <Icon
                    name="arrow-forward-ios"
                    size={8}
                    style={{...padding(0, 1)}}
                    color={theme.colors.primaryText}
                  />
                  <View style={st.timeContainer}>
                    <Text style={st.time}>{staticHistory().toDate}</Text>
                    <Text style={st.time}>{staticHistory().toHour}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </Animated.View>
        </ScrollView>
      </View>
    // </BackgroundWall>
  );
};

export default ProfileScreen;
