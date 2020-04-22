import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import formatBi from '../functions/formatBi';

const formatDate = (tObj,sufix) =>{
  const data = tObj.toString();
  if(data>0){
    if(data>1) return (data).concat(" " + sufix).concat('s');
    else return data.concat(" " + sufix);
  }
  else return -1;
  
}

const TimerClock = ({timeobj}) => {
  if(timeobj===-1){
    return(
      <Text style={styles.clockText}>
        {`00:00:00`}
      </Text>
    )
  }else{
    return (
      <View>
        <Text style={styles.clockText}>
          {`${formatBi(timeobj.hour)}:${formatBi(timeobj.min)}:${formatBi(
            timeobj.sec,
          )}`}
        </Text>
        <View style={styles.dateWrap}>
          {(timeobj.day  !==0)&&<Text style={styles.dateText}>{formatDate(timeobj.day,'day')}</Text>}
          {(timeobj.month!==0 &&timeobj.month!==12)&&<Text style={styles.dateText}>{formatDate(timeobj.month,'month')}</Text>}
          {(timeobj.year !==0)&&<Text style={styles.dateText}>{formatDate(timeobj.year,'year')}</Text>}
        </View>
      </View>
    );
  }
};

export default TimerClock;

const styles = StyleSheet.create({
  clockText: {
    fontSize: 60,
    fontWeight: 'normal',
    color: '#303030',
  },
  dateWrap: {
    justifyContent: 'space-around',
    flexDirection:'row',
  },
  dateText:{
    fontSize: 18,
    color: '#303030'
  }
});
 