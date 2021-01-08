import moment, { Moment } from 'moment';

export const getDaysArray = (year: number, month: number) => {
  const names = Object.freeze([
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
  ]);

  const monthIndex = month - 1;
  const date: Date = new Date(year, monthIndex, 1);
  const result: Array<string> = [];

  while (date.getMonth() === monthIndex) {
    result.push(`${date.getDate()}-${names[date.getDay()]}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const getWeekDays = (year: number, month: number) => {
  const result: Array<Array<unknown>> = [];
  for (let i = 0; i < 5; i++) {
    const weekDays: Array<number> = [];
    for (let j = 0; j < 7; j++) {
      weekDays.push(null);
    }

    result.push(weekDays);
  }

  return result;
};

export const getFirstDayMonth = (year: number, month: number) => {
  return moment([year, month - 1, 1]).weekday();
};

export const getDaysMonth = (year: number, month: number) => {
  return moment([year, month - 1, 1]).daysInMonth();
};

export const getWeeks = (year: number, month: number) => {
  return moment([year, month - 1, 1]).weeks();
};

export const getWeeksNum = (year: number, month: number) => {
  const date = moment([year, month - 1, 1]);
  const dateFirst = moment(date).date(1);
  const dateLast = moment(date).date(date.daysInMonth());

  const startWeek = dateFirst.isoWeek();
  const endWeek = dateLast.isoWeek();

  if (endWeek < startWeek) {
    // Yearly overlaps, month is either DEC or JAN
    if (dateFirst.month() === 0) {
      // January
      return endWeek + 1;
    } else {
      // December
      if (dateLast.isoWeekday() === 7) {
        // Sunday is last day of year
        return endWeek - startWeek + 1;
      } else {
        // Sunday is NOT last day of year
        return dateFirst.isoWeeksInYear() - startWeek + 1;
      }
    }
  } else {
    return endWeek - startWeek + 1;
  }
};

export const weeks_in_month = (year: number, month: number) => {
  const startDate = moment([year, month - 1]);

  const endDate = moment(startDate).endOf('month');

  const dates = [];
  const weeks = [];

  let per_week = [];
  const difference = endDate.diff(startDate, 'days');

  per_week.push(startDate.toDate());
  let index = 0;
  let last_week = false;
  while (startDate.add(1, 'days').diff(endDate) < 0) {
    if (startDate.day() !== 0) {
      per_week.push(startDate.toDate());
    } else {
      if (startDate.clone().add(7, 'days').month() === month - 1) {
        weeks.push(per_week);
        per_week = [];
        per_week.push(startDate.toDate());
      } else if (Math.abs(index - difference) > 0) {
        if (!last_week) {
          weeks.push(per_week);
          per_week = [];
        }
        last_week = true;
        per_week.push(startDate.toDate());
      }
    }
    index += 1;
    if (
      (last_week === true && Math.abs(index - difference) === 0) ||
      (Math.abs(index - difference) === 0 && per_week.length === 1)
    ) {
      weeks.push(per_week);
    }
    dates.push(startDate.clone().toDate());
  }

  return weeks;
};

export const weeks_of_month = (year: number, month: number) => {
  const startDate = moment([year, month - 1]);
  const firstWeekDate = startDate.clone().startOf('week');
  const endDate = startDate.endOf('month');
  const endWeekDate = endDate.endOf('week');

  const weeks: Array<Array<Moment>> = [];
  let per_week: Array<Moment> = [];

  let i = 0;
  do {
    per_week.push(firstWeekDate.clone());
    i++;

    if (i % 7 === 0) {
      weeks.push(per_week);
      per_week = [];
    }
  } while (firstWeekDate.add(1, 'days').diff(endWeekDate) < 0);

  return weeks;
};
