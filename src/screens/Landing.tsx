import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import Logo42 from '../images/42_logo.svg';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import {styles} from './styles/Landing'

const Landing = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const pauseCode = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    pauseCode();
  }, []);

  return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroller}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logoWrapper}>
          <Logo42 style={styles.logo} />
          <Text style={styles.clusterText}> CLUSTER </Text>
          <View style={{height: 200}} />
        </View>
        {isLoading ? (
          <>
            <View style={styles.progressBarContainer}>
              <ProgressBar styleAttr="Horizontal" color="#3D6670" />
            </View>
            <Text style={styles.creditsText}>
              {'Made in 1337 KH by:\nabouazi, anel-bou & aait-ihi'}
            </Text>
          </>
        ) : (
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>SIGN IN WITH 42 INTRA</Text>
          </Pressable>
        )}
      </ScrollView>
  );
};

export default Landing;
