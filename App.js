import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
