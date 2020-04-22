import React, {useState, useEffect} from 'react';
import dates from './__datasets/dates';
import TimerContext from './context/TimerContext';
import Home from './components/Home';

export default (App = () => {
  const [current, setCurrent] = useState(
    dates.timeStamps[0] !== undefined ? dates.timeStamps[0] : -1,
  );

  const [listItems, updateListItems] = useState(dates.timeStamps);

  useEffect(() => {
    if (listItems.length === 0) {
      setCurrent(-1);
    }
  }, [listItems]);

  useEffect(()=>{
    updateListItems(dates.timeStamps);
  }, [dates.timeStamps])

  return (
    <TimerContext.Provider
      value={{
        current: current,
        dates: listItems.length !== 0 ? listItems : -1,
        updateCurrent: e => {
          //update the timer displaying on top.
          setCurrent(listItems.find(el => el._id === e));
        },
        addDate: newdate => {
          //adding a date
          dates.count = dates.count + 1;
          dates.timeStamps.push({...newdate, _id: dates.count.toString()});
          updateListItems(dates.timeStamps);
          // console.log("added" + JSON.stringify(newdate))
          setCurrent(listItems[listItems.length - 1]);
        },
        deleteDate: dateID => {
          //deleting a date.
          dates.timeStamps = dates.timeStamps.filter(i => i._id !== dateID);
          updateListItems(dates.timeStamps);
        },
      }}>

      <Home />
      
    </TimerContext.Provider>
  );
});
