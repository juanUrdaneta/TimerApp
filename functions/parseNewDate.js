import moment from 'moment';

export default parseNewDate = newDate=>{
  const x = moment(newDate);
  return{
    year: x.year(),
    month: x.month()+1,//***
    date: x.date(),
    hour:0,
    min:0,
    sec:0
  }
}