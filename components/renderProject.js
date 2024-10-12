/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';

const renderProject = ({item}) => {
  return (
    <View style={styles.projectCard}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectTitle}>{item.name}</Text>
        <View style={styles.avatars}>
          {item.members.slice(0, 3).map((member, index) => (
            <Image key={index} source={member.avatar} style={styles.avatar} />
          ))}
          {item.members.length > 3 && (
            <View style={styles.moreMembers}>
              <Text style={styles.moreMembersText}>
                +{item.members.length - 3}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.dateRow}>
        <View style={styles.dateItem}>
          <Icon name="calendar" size={14} color="#A29EB6" />
          <Text style={[styles.dateText, {color: '#A29EB6'}]}>
            {item.startDate}
          </Text>
        </View>
        <View style={styles.line}>
          <IconE
            name="dot-single"
            size={30}
            color="#A29EB6"
            style={{marginRight: -10}}
          />
          <View style={styles.dashLine} />
          <IconM
            name="play-arrow"
            size={25}
            color="#A29EB6"
            style={{marginLeft: -10}}
          />
        </View>
        <View style={styles.dateItem}>
          <Icon name="calendar" size={14} color="#2B5DAA" />
          <Text style={[styles.dateText, {color: '#2B5DAA'}]}>
            {item.endDate}
          </Text>
        </View>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.progressPercentage}>
          {`${item.progress * 100}%`}
        </Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBar, {width: `${item.progress * 100}%`}]}
          />
        </View>
        <Text
          style={
            styles.taskCount
          }>{`${item.completedTasks}/${item.totalTasks} Tasks`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginVertical: 10,
    elevation: 6,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1243',
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
  },
  moreMembers: {
    backgroundColor: '#FFE164',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  moreMembersText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    marginLeft: 5,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  dashLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#A29EB6',
  },
  progressPercentage: {
    fontSize: 12,
    color: '#1C1243',
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#EFF1F3',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2B5DAA',
  },
  taskCount: {
    fontSize: 12,
    color: '#1C1243',
  },
});

export default renderProject;
