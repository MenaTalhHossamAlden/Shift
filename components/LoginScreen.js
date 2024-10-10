import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>shi</Text>
        <Icon name="fingerprint" size={80} color="#2B5DAA" />
      </View>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.subText}>Please Log in to continue</Text>
      <View style={styles.inputContainer}>
        <Icon1 name="user" size={20} color="#2B5DAA" />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#2B5DAA"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon1 name="lock" size={20} color="#2B5DAA" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#2B5DAA"
          style={styles.input}
        />
        <TouchableOpacity>
          <Icon name="eye" size={20} color="#2B5DAA" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.replace('Welcome')}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.or}>
        <View style={styles.orBorder}></View>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orBorder}></View>
      </View>
      <View style={styles.faceContainer}>
        <TouchableOpacity>
          <Icon name="fingerprint" size={50} color="#2B5DAA" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon1 name="smile-o" size={50} color="#2B5DAA" />
        </TouchableOpacity>
      </View>
      <Text style={styles.troubleText}>
        Trouble logging in? Contact Support for assistance
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 100,
    color: '#2B5DAA',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 27,
    color: '#2B5DAA',
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 28.8,
  },
  subText: {
    fontSize: 14,
    color: '#1C1243',
    lineHeight: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2B5DAA',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    width: '100%',
  },
  input: {
    paddingHorizontal: 12,
    flexGrow: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: '#2B5DAA',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
  loginButton: {
    backgroundColor: '#2B5DAA',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  or: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    fontSize: 16,
    color: '#B1B1B1',
    paddingHorizontal: 10,
  },
  orBorder: {
    width: '25%',
    height: 1,
    backgroundColor: '#B1B1B1',
  },
  faceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  troubleText: {
    fontSize: 12,
    color: '#2B5DAA',
    marginTop: 20,
  },
});

export default LoginScreen;
