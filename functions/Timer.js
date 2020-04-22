const days = {
  0:'sunday',
  1:'monday',
  2:'tuesday',
  3:'wednesday',
  4:'thursday',
  5:'friday',
  6:'saturday'
}
const months = {
  0:{len: 31, name:'January'},
  1:{len: 28, name:'February'},
  2:{len: 31, name:'March'},
  3:{len: 30, name:'April'},
  4:{len: 31, name:'May'},
  5:{len: 30, name:'June'},
  6:{len: 31, name:'July'},
  7:{len: 31, name:'August'},
  8:{len: 30, name:'September'},
  9:{len: 31, name:'October'},
  10:{len: 30, name:'November'},
  11:{len: 31, name:'December'}
}

const check = (timeobj) => {
  let count = 1;
  for (obj in timeobj) {
    if(timeobj[obj]<0) count = count*0;
  }
  if (count === 1) return true;
  return false;
};

export default computeTimeUntil = (finalDate) => {

  const date = new Date();

  obj = {
    sec:   finalDate.getTime()/1000 - date.getTime()/1000,
    min:   finalDate.getTime()/1000/60 - date.getTime()/1000/60,
    hours: finalDate.getTime()/1000/60/60 - date.getTime()/1000/60/60,
    day:   finalDate.getTime()/1000/60/60/24 - date.getTime()/1000/60/60/24,
    year:  finalDate.getTime()/1000/60/60/24/365 - date.getTime()/1000/60/60/24/365,
  }

  objB = {
    sec:    Math.floor(obj.sec - (Math.floor(obj.min)*60)),
    min:    Math.floor(obj.min - (Math.floor(obj.hours)*60)),
    hours:  Math.floor(obj.hours - (Math.floor(obj.day)*24)),
    days:   Math.floor(obj.day % 30),
    months: Math.floor((obj.day / 30) - Math.floor(Math.floor(obj.year) * 12)),
    year:   Math.floor(obj.year)
  }
  if(check(objB)) return objB;
  return -1;
}