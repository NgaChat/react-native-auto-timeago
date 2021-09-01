import React, { useState, useEffect, useRef } from 'react';

import { Text } from 'react-native';

import moment from "moment";





export default function App(props) {
  const [time, setTime] = useState(timeAgo(props.timestamp));


  useInterval(() => {
    setTime(timeAgo(props.timestamp))
  }, props.interval);


  return (
    <Text>
      {time}
    </Text>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function timeAgo(timestamp, DWMY_timeAgo = true) {
  var momentDate = moment.unix(timestamp),
    dateTime = {
      seconds: moment().diff(momentDate, 'seconds'),
      minutes: moment().diff(momentDate, 'minutes'),
      hours: moment().diff(momentDate, 'hours'),
      days: moment().diff(momentDate, 'days'),
      weeks: moment().diff(momentDate, 'weeks'),
      months: moment().diff(momentDate, 'months'),
      years: moment().diff(momentDate, 'years'),
      today: isToday(momentDate),
      yesterday: isYesterday(momentDate),
      dayName: momentDate.format('dddd'),
      fullDateTime: momentDate.format('LLLL'),
      date: momentDate.format('LL'),
      time: momentDate.format('LT'),
      calendar: momentDate.calendar()
    },
    datetime = dateTime.date + ' at ' + dateTime.time;
  let outputTime = '';


  if (dateTime.seconds > 0) {
    outputTime = '1 Second ago';
  }
  if (dateTime.seconds > 1) {
    outputTime = dateTime.seconds + ' Seconds ago';
  }

  if (dateTime.minutes == 1) {
    outputTime = '1 Minute ago';
  }
  if (dateTime.minutes > 1) {
    outputTime = dateTime.minutes + ' Minutes ago';
  }

  if (dateTime.hours == 1) {
    outputTime = '1 hour ago';
  }
  if (dateTime.hours > 1) {
    outputTime = dateTime.hours + ' hours ago';
  }

  if (dateTime.days == 1) {
    if (DWMY_timeAgo) {
      outputTime = '1 Day ago';
    } else {
      outputTime = datetime;
    }
  }
  if (dateTime.days > 1) {
    if (DWMY_timeAgo) {
      outputTime = dateTime.days + ' Days ago';
    } else {
      outputTime = datetime;
    }
  }

  if (dateTime.weeks == 1) {
    if (DWMY_timeAgo) {
      outputTime = dateTime.weeks + ' Week';
    } else {
      outputTime = datetime;
    }
  }
  if (dateTime.weeks > 1) {
    if (DWMY_timeAgo) {
      outputTime = dateTime.weeks + ' Weeks';
    } else {
      outputTime = datetime;
    }
  }

  if (dateTime.months == 1) {
    if (DWMY_timeAgo) {
      outputTime = '1 Month ago';
    } else {
      outputTime = datetime;
    }
  }
  if (dateTime.months > 1) {
    if (DWMY_timeAgo) {
      outputTime = dateTime.months + ' Months ago';
    } else {
      outputTime = datetime;
    }
  }

  if (dateTime.years == 1) {
    if (DWMY_timeAgo) {
      outputTime = '1 Year ago';
    } else {
      outputTime = datetime;
    }
  }
  if (dateTime.years > 1) {
    if (DWMY_timeAgo) {
      outputTime = dateTime.yeras + ' Years ago';
    } else {
      outputTime = datetime;
    }
  }

  if (dateTime.yesterday) {
    outputTime = dateTime.calendar;
  }


  return outputTime;
}

function isToday(momentDate) {
  var yesterday = moment().clone().startOf('day');
  return momentDate.isSame(yesterday, 'd');
}

function isYesterday(momentDate) {
  var yesterday = moment().clone().subtract(1, 'days').startOf('day');
  return momentDate.isSame(yesterday, 'd');
}


