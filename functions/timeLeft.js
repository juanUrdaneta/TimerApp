import moment from 'moment';

const sortNumber = (num, avgnum) => {
  if (num < 0) return avgnum + num;
  return num;
};

const format = 'MM DD YYYY hh:mm:ss';

export default (timeLeft = date => {
  let x = moment();
  let y = moment(date, format);

  const countdown = moment(y-x);

  let retObj = {
    year: Math.floor(y.diff(x, 'years')),
    month: sortNumber(y.month() - x.month(), 12),
    day: sortNumber(y.date() - x.date(), 30),
    hour: sortNumber(y.hour() - x.hour(), 24),
    min: sortNumber(y.minute() - x.minute(), 60),
    sec: sortNumber(y.second() - x.second(), 60),
  };

  let count = 0;
  
  for(let i in retObj){
    count += retObj[i];
  }

  return count !== 0 ? retObj : -1;
});
