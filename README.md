# react-native-timeago



An auto-updating timeago component for React Native using [moment.js](http://momentjs.com/).

## Usage

import React, { Component } from 'react';
import TimeAgo from 'react-native-timeago';



class MyComponent extends Component {

  ...

  render() {
    return (
      // This component would update every 20 seconds
      <TimeAgo time={timestamp} interval={1000} />
    )
  }

  ...
};
```




