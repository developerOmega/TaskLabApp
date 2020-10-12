const parseDate = (date) => {
  let parts = date.split('/');
  let temp = parts[0];
  parts[0] = parts[1];
  parts[1] = temp;
  return new Date(Date.parse(parts.join('/')));  
}

const sumDays = (date, days) => {
  let fdate = parseDate(date);
  fdate.setDate(fdate.getDate()+days);
  return fdate;
}

const restDays = (date, days) => {
  let fdate = parseDate(date);
  fdate.setDate(fdate.getDate()-days);
  return fdate;
}

export { sumDays, restDays };