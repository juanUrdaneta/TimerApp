import React, { useState, useContext, useCallback } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import formatBi from '../functions/formatBi';
import TimerContext from '../context/TimerContext';
import moment from 'moment';


export default TimeListItem = ({date}) => {

  const {updateCurrent} = useContext(TimerContext);
  const {updateDate} = useContext(TimerContext);
  const {deleteDate} = useContext(TimerContext);

  const [show, setShow] = useState(false);
  const [formatedDate, setFormatedDate] = useState(new Date(date.year, date.month-1, date.date))
  //substracted one for month because it was needed for consistency
  //lookup Home.js method: parseNewDate() for more details.

  const onSetTime = useCallback((time)=>{
    console.log('called')
    setShow(false);
    const x = moment(time);
    let y = {
      _id:date._id,
      year: date.year,
      month: date.month,
      date: date.date,
      hour:x.hour(),
      min:x.minute(),
      sec:0
    }
    updateDate(y);
  })

  return ( 
    <View style={styles.masterView}>
      <TouchableOpacity
        onPress={()=>updateCurrent(date._id)}
        >
          <Text style={styles.testText}>{formatBi(date.date)}/{formatBi(date.month)}/{date.year}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{deleteDate(date._id)}}>
          <Text style={styles.delete}>X</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={formatedDate}
          mode='time'
          is24Hour={true}
          display="spinner"
          onChange={(e,t)=>{onSetTime(t)}}
        />
      )}

    </View> 
  );
}

const styles = StyleSheet.create({
  masterView:{
    height: 100,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#AAA'
  },
  testText:{
    fontSize: 40,
    color: '#303030',
  },
  delete:{
    fontSize:30,
    marginRight: 20,
    color:'#303030'
  },
  timer:{
    fontSize:30,
    color:'#303030'
  }
});