export default formatBi = arg => {
  if (arg < 10) return '0'.concat(arg.toString());
  return arg.toString();
};