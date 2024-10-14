/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MapboxGL from '@rnmapbox/maps';
import {TextInput} from 'react-native-gesture-handler';

const ProjectDetailsScreen = () => {
  const [comment, setComment] = useState('');
  const location = {
    latitude: 30.033333,
    longitude: 31.233334,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="chevron-left" size={24} color="#1C1243" />
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Icon name="bell" size={24} color="#2B5DAA" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="menu" size={24} color="#2B5DAA" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Icon name="target" size={29} color="#1C1243" />
        <Text style={styles.title}>Project Details</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.projectTitle}>Innovative HR Solutions</Text>
        <Icon name="edit" size={24} color="#2B5DAA" />
      </View>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/project.jpg')}
          style={styles.projectImage}
        />
        <Text style={styles.projectDescription}>
          Charting a course toward HR excellence through innovative solutions,
          strategic talent management that inspires growth and achievement.
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.progressPercent}>75%</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, {width: '75%'}]} />
      </View>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeItem}>
          <Icon name="clock" size={24} color="#1C1243" />
          <Text style={styles.dateText}>From: 02:00 PM</Text>
        </View>
        <View style={styles.dateTimeItem}>
          <Icon name="clock" size={24} color="#1C1243" />
          <Text style={styles.dateText}>To: 02:00 PM</Text>
        </View>
        <View style={styles.dateTimeItem}>
          <Icon name="calendar" size={24} color="#1C1243" />
          <Text style={styles.dateText}>From: 02 Sep 2023</Text>
        </View>
        <View style={styles.dateTimeItem}>
          <Icon name="calendar" size={24} color="#1C1243" />
          <Text style={styles.dateText}>To: 02 Jan 2024</Text>
        </View>
      </View>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          zoomLevel={10}
          centerCoordinate={[location.longitude, location.latitude]}
        />
        <MapboxGL.PointAnnotation
          id="marker"
          coordinate={[location.longitude, location.latitude]}
        />
      </MapboxGL.MapView>
      <View style={[styles.teamMembers, styles.box]}>
        <Text style={styles.teamLabel}>Team Members</Text>
        <View style={styles.member}>
          <Image
            source={require('../assets/m1.png')}
            style={styles.memberImage}
          />
          <View>
            <Text style={styles.memberName}>Olivia Rhye</Text>
            <Text style={styles.memberRole}>Founder & CEO</Text>
          </View>
        </View>
        <View style={styles.member}>
          <Image
            source={require('../assets/m2.png')}
            style={styles.memberImage}
          />
          <View>
            <Text style={styles.memberName}>Phoenix Baker</Text>
            <Text style={styles.memberRole}>Engineering Manager</Text>
          </View>
        </View>
      </View>
      <View style={[styles.commentBox, styles.box]}>
        <View style={styles.commenter}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.commenterImage}
          />
          <Text style={styles.commenterName}>Mohamed Badr</Text>
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder="This is my comment regarding this mission."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => console.log('Comment:', comment)}>
          <Text style={styles.commentButtonText}>comment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <Text onPress={() => {}} style={styles.footerBtnText}>
            Check In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn}>
          <Text onPress={() => {}} style={styles.footerBtnText}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1243',
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2B5DAA',
  },
  projectImage: {
    width: 124,
    height: 114,
    borderRadius: 90,
    marginRight: 10,
  },
  projectDescription: {
    flex: 1,
    fontSize: 14,
    color: '#1C1243',
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
    fontColor: '#1C1243',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2B5DAA',
  },
  progressBar: {
    marginBottom: 20,
    height: 8,
    backgroundColor: '#809ECC33',
    borderRadius: 4,
    marginVertical: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2B5DAA',
    borderRadius: 4,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  dateTimeItem: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#1C1243',
    fontWeight: '500',
  },
  map: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  box: {
    borderRadius: 15,
    elevation: 2.5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  teamMembers: {
    padding: 12,
  },
  teamLabel: {
    color: '#2B5DAA',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 64,
    height: 64,
    borderRadius: 200,
    marginRight: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1243',
  },
  memberRole: {
    fontSize: 12,
    fontWeight: '500',
    color: '#809ECC',
  },
  commentBox: {
    padding: 20,
  },
  commenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  commenterImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  commenterName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#406DB2',
  },
  commentInput: {
    borderBottomWidth: 1,
    borderColor: '#0000001A',
    padding: 10,
    marginBottom: 10,
  },
  commentButton: {
    backgroundColor: '#2B5DAA',
    borderRadius: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    color: '#fff',
    height: 24,
    justifyContent: 'center',
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  footerBtn: {
    width: '49%',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2B5DAA',
    justifyContent: 'center',
  },
  footerBtnText: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: '#2B5DAA',
  },
});

export default ProjectDetailsScreen;
