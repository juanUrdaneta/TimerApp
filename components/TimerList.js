import React, {} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import TimeListItem from './TimerListItem';

const TimeList = ({dates}) => {
  if (dates === -1) {
    return (
      <View style={styles.noDate}>
        <Text style={styles.prompt}>No dates added.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.masterView}>
        <FlatList
          data={dates}
          renderItem={({item}) => <TimeListItem date={item} />}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
};

export default TimeList;

const styles = StyleSheet.create({
  masterView: {
    flex: 3,
    backgroundColor: 'whitesmoke',
  },
  noDate: {
    flex: 3,
    alignItems:'center',
    backgroundColor: 'whitesmoke',
  },
  prompt:{
    position: 'absolute',
    top:'30%',
    fontSize: 20,
  }
});
