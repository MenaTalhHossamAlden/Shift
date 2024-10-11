import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const SuccessfulLogin = ({navigation}) => {
  const handleGoHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/success-check.png')}
        style={styles.successIcon}
        resizeMode="contain"
      />
      <Text style={styles.title}>Successful Login!</Text>
      <Text style={styles.subtitle}>
        Welcome back! You have successfully logged in. Enjoy your experience!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Go To Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  logo: {
    width: 240,
    height: 240,
    marginBottom: -20,
  },
  successIcon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    color: '#2B5DAA',
    marginBottom: 2,
    fontWeight: '700',
    lineHeight: 28.8,
  },
  subtitle: {
    fontSize: 14,
    color: '#1C1243',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 100,
    width: '70%',
  },
  button: {
    backgroundColor: '#2B5DAA',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default SuccessfulLogin;
