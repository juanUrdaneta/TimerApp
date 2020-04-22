import React, {useContext, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

import TimerLogic from './TimerLogic';
import TimerList from './TimerList';
import DateTimePicker from '@react-native-community/datetimepicker';
import parseNewDate from '../functions/parseNewDate'


const Home = () => {
  let {current} = useContext(TimerContext);
  let {dates}   = useContext(TimerContext);
  let {addDate} = useContext(TimerContext);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  const onChange = useCallback((selectedDate)=>{
    const newDate = selectedDate || date; 
    setShow(false);
    if(newDate !== date){
      addDate(parseNewDate(newDate));
    }
    setDate(newDate);
  });

  return (
    <View style={styles.masterView}>
      <TimerLogic endTime={current} />
      <TimerList dates={dates} />
      <TouchableOpacity 
        style={styles.timeInput}
        onPress={()=>{setShow(true)}}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          minimunDate={new Date()}
          value={date}
          mode='date'
          is24Hour={true}
          display="spinner"
          onChange={(e,date)=>{onChange(date)}}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  masterView: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  timeInput: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  icon: {
    color: '#FDFDFD',
    fontSize: 30,
  },
  modal:{
    flex:1,
  },
  modalT:{
    justifyContent:"space-between",
    backgroundColor:'white',
    position:'relative',
    top:'30%',
    height:'30%',
  }
});
// *** moment().month() return months from 0 to 11 so +1 is added to provide consistency accross calculations