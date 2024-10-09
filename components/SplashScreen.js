import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>shi</Text>
        <Icon name="fingerprint" size={80} color="#FFE164" />
      </View>
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '80%',
  },
  logoText: {
    fontSize: 100,
    color: '#FFE164',
    fontWeight: 'bold',
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
