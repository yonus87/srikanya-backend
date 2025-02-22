import moment from 'moment-timezone';


export const convertDateToTimezone = (date: string, timezoneoffset: string, format: string = 'MM/DD/YYYY hh:mm:ss A'): string => {
  return moment(date).tz(timezoneoffset).format(format);
};

export const formateDate = (date: string, format: string = 'MM/DD/YYYY, hh:mm A'): string => {
  return moment(date).format(format);
};

export const converDateToFormatWithtz = (date: string, format: string, tz: string): string => {
  return tz ? moment(date).tz(tz).format(format) : moment(date).format(format);
};

export const addHoursWithtz = (date: string, duration: string, tz: string): string => {
  return moment(moment(date).tz(tz).valueOf()).add(duration, 'hours').tz(tz).format();
};

export const addMinutes = (date: string, duration: string, tz: string): string => {
  return moment(moment(date).tz(tz).valueOf()).add(duration, 'minutes').tz(tz).format();
};

export const addSeconds = (date: string, duration: string, tz: string): string => {
  return moment(moment(date).tz(tz).valueOf()).add(duration, 'seconds').tz(tz).format();
};

export const substractDaysWithtz = (date: string, duration: number, tz: string): string => {
  return moment(moment(date).valueOf()).subtract(duration, 'days').tz(tz).format();
};

export const getTimeWithtz = (date: string, tz: string): number => {
  return moment(date).tz(tz).valueOf();
};

export const enumerateDaysBetweenDates = (startdate: string, enddate: string): Array<any> => {
  const date = [];

  while (moment(startdate).valueOf() <= moment(enddate).valueOf()) {
    date.push(startdate);
    startdate = moment.utc(moment(startdate).add(1, 'days')).format();
  }
  return date;
};

export const convertTimeToDate = (time: number): string => {
  return moment(time).format();
};

export const convertTimeToDat1 = (time: any, tz: any): any => {
  return moment(time, 'YYYY-MM-DD HH:mm:ss').tz(tz).format();
};
