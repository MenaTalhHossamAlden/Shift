import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconI from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.bottomNavigationItem}>
        <IconA name="home" size={25} color="#2B5DAA" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomNavigationItem}>
        <IconM name="hub" size={25} color="#2B5DAA" />
        <Text>Work Hub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomNavigationItem}>
        <IconA name="user" size={25} color="#2B5DAA" />
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomNavigationItem}>
        <IconI name="newspaper-outline" size={25} color="#2B5DAA" />
        <Text>News</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 2,
    borderColor: '#e9ecef',
  },
  bottomNavigationItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
