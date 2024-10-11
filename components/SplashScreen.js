import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.footerText}>
        Powered by <Text style={styles.codidText}>{'{codid;}'}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B5DAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: '90%',
  },
  footerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  codidText: {
    color: '#FFE164',
  },
});

export default SplashScreen;
