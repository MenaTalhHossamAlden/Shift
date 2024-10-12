import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import projects from '../assets/projects';
import renderProject from './renderProject';
import Icon from 'react-native-vector-icons/Foundation';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconI from 'react-native-vector-icons/Ionicons';

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.header}>
          <Icon name="target" size={40} color="#1C1243" />
          <Text style={styles.headerText}>Project Management</Text>
        </View>
        <FlatList
          data={projects}
          renderItem={renderProject}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Project</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  details: {
    padding: 20,
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1243',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#2B5DAA',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  addButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
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

export default ProjectScreen;
