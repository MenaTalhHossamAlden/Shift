/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
// import { CheckBox } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapboxGL from '@rnmapbox/maps';
import Footer from './Footer';
MapboxGL.setAccessToken(
  'sk.eyJ1IjoibWVuYXRhbGgiLCJhIjoiY20yN2lkd3JmMWhhejJxcXc5ZnQ1b2Q0aiJ9.Pz2eLjrJFwxjFgCZ9rpn3w',
);

const AddProjectScreen = () => {
  const [projectName, setProjectName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [missionDescription, setMissionDescription] = useState('');
  const [note, setNote] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [show, setShow] = useState({
    sd: false,
    st: false,
    ed: false,
    et: false,
  });

  const onChangeSD = (event, date) => {
    setShow({
      sd: false,
      st: false,
      ed: false,
      et: false,
    });
    if (date) {
      setStartDate(date);
    }
  };
  const onChangeST = (event, time) => {
    setShow({
      sd: false,
      st: false,
      ed: false,
      et: false,
    });
    if (time) {
      setStartTime(time);
    }
  };
  const onChangeED = (event, date) => {
    setShow({
      sd: false,
      st: false,
      ed: false,
      et: false,
    });
    if (date) {
      setEndDate(date);
    }
  };
  const onChangeET = (event, time) => {
    setShow({
      sd: false,
      st: false,
      ed: false,
      et: false,
    });
    if (time) {
      setEndTime(time);
    }
  };
  const formattedDate = date =>
    date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  const formattedTime = date =>
    date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Mohamed Badr</Text>
          <Text style={styles.position}>Admin Position</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Project Name"
        placeholderTextColor="#406DB2"
        value={projectName}
        onChangeText={setProjectName}
      />
      <TextInput
        style={styles.input}
        placeholder="Project Code"
        placeholderTextColor="#406DB2"
        value={projectCode}
        onChangeText={setProjectCode}
      />
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShow({sd: true, ...show})}>
          <Text style={styles.inputContainerText}>Start Date</Text>
          <Text style={styles.inputContainerValue}>
            {formattedDate(startDate)}
          </Text>
          {show.sd && (
            <DateTimePicker
              value={startDate}
              mode="date"
              onChange={onChangeSD}
              display="default"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShow({st: true, ...show})}>
          <Text style={styles.inputContainerText}>Start Time</Text>
          <Text style={styles.inputContainerValue}>
            {formattedTime(startTime)}
          </Text>
          {show.st && (
            <DateTimePicker
              value={startDate}
              mode="time"
              onChange={onChangeST}
              display="default"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShow({sed: true, ...show})}>
          <Text style={styles.inputContainerText}>End Date</Text>
          <Text style={styles.inputContainerValue}>
            {formattedDate(endDate)}
          </Text>
          {show.ed && (
            <DateTimePicker
              value={endDate}
              mode="date"
              onChange={onChangeED}
              display="default"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShow({et: true, ...show})}>
          <Text style={styles.inputContainerText}>End Time</Text>
          <Text style={styles.inputContainerValue}>
            {formattedTime(endTime)}
          </Text>
          {show.et && (
            <DateTimePicker
              value={startDate}
              mode="time"
              onChange={onChangeET}
              display="default"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.inputContainerText}>Mission Description</Text>
        <TextInput
          style={styles.textAreaInput}
          placeholder="Text"
          multiline
          value={missionDescription}
          onChangeText={setMissionDescription}
        />
      </View>
      <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationText}>Add Location</Text>
        <Ionicons name="location" size={24} color="white" />
      </TouchableOpacity>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          zoomLevel={8}
          centerCoordinate={[location.longitude, location.latitude]}
        />
        <MapboxGL.PointAnnotation
          id="marker"
          coordinate={[location.longitude, location.latitude]}
        />
      </MapboxGL.MapView>
      <View style={styles.Active}>
        <Switch value={isActive} onValueChange={setIsActive} />
        <Text>Active Project</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.inputContainerText}>Note</Text>
        <TextInput
          style={styles.textAreaInput}
          placeholder="Text"
          multiline
          value={note}
          onChangeText={setNote}
        />
      </View>
      <View style={styles.Active}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          tintColors={{true: '#2B5DAA', false: '#A29EB6'}}
        />
        <Text>Share With Everyone</Text>
      </View>
      <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationText}>Submit</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  headerText: {
    marginLeft: 24,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1243',
  },
  position: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2B5DAA',
  },
  input: {
    borderWidth: 1,
    borderColor: '#2B5DAA',
    borderRadius: 10,
    marginBottom: 24,
  },
  inputContainerValue: {
    color: '#2B5DAA',
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 24,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2B5DAA',
    borderRadius: 10,
    padding: 16,
    position: 'relative',
  },
  inputContainerText: {
    color: '#2B5DAA',
    backgroundColor: '#fff',
    position: 'absolute',
    top: -12,
    left: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  textArea: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#2B5DAA',
    borderRadius: 10,
    marginBottom: 15,
    height: 150,
    color: '#809ECC',
  },
  locationButton: {
    backgroundColor: '#2B5DAA',
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: 'white',
    marginRight: 15,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  map: {
    height: 200,
    marginBottom: 15,
  },
  Active: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
});

export default AddProjectScreen;
