export default stringifyTime = endTime => {
  return `${endTime.month} ${endTime.date} ${endTime.year} ${endTime.hour}:${endTime.min}:${endTime.sec}`;
}