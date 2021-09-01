# react-native-auto-timeago

[![View package on npm](https://img.shields.io/npm/v/react-native-auto-timeago.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/react-native-timeago) [![npm](https://img.shields.io/npm/dm/react-native-auto-timeago.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/react-native-auto-timeago) ![Build status](https://travis-ci.org/tylerlh/react-native-auto-timeago.svg?branch=master)

An auto-updating timeago component for React Native using [moment.js](http://momentjs.com/).

## Usage

```jsx
import React, { Component } from 'react';
import TimeAgo from 'react-native-auto-timeago';

// Timestamp can be any valid data type accepted in a Moment.js constructor
// Currently accepts string, number, array, or a Date instance
let timestamp = "2015-06-21T06:24:44.124Z";

class MyComponent extends Component {

  ...

  render() {
    return (
      <TimeAgo time={timestamp} interval={20000} />
    )
  }

  ...
};
```






All normal Text props are applicable (including style). Use the `interval` prop to change the update interval in milliseconds 

```jsx

```




