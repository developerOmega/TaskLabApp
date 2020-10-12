// Metodo que retorna fecha
// Recibe parametros -> date:datetime ('dd/mm/yyyy')
const parseDate = (date) => {
  let parts = date.split('/');
  let temp = parts[0];
  parts[0] = parts[1];
  parts[1] = temp;
  return new Date(Date.parse(parts.join('/')));  
}

// Metodo que retorna suma de fecha
// Recibe parametros -> date:datetime (new Date), days:number (cantidad a sumar)
const sumDays = (date, days) => {
  let fdate = parseDate(date);
  fdate.setDate(fdate.getDate()+days);
  return fdate;
}


// Metodo que retorna resta de fecha
// Recibe parametros -> date:datetime (new Date), days:number (cantidad a restar)
const restDays = (date, days) => {
  let fdate = parseDate(date);
  fdate.setDate(fdate.getDate()-days);
  return fdate;
}

export { sumDays, restDays };