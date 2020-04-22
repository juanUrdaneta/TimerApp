import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import timeLeft from '../functions/timeLeft';
import stringifyTime from '../functions/stringifyTime';
import TimerClock from './TimerClock';

const TimerLogic = ({endTime}) => {
  // console.log("timerlogic: "+ JSON.stringify(endTime))
  const [timeobj, setTimeobj] = useState(timeLeft(stringifyTime(endTime)));
  let x;
  useEffect(() => {
    if(endTime!==-1 && timeobj !==-1){
      setTimeobj(timeLeft(stringifyTime(endTime)));
      x = setInterval(() => {
        setTimeobj(timeLeft(stringifyTime(endTime)));
      }, 1000);
    }
    return () => clearTimeout(x);
  }, [endTime]);

  return (
    <View style={styles.timeBox}>
      <TimerClock timeobj={(endTime!==-1)?timeobj:-1} />
    </View>
  );
};

export default TimerLogic;

const styles = StyleSheet.create({
  timeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor:'whitesmoke'
  },
  dueDate: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
