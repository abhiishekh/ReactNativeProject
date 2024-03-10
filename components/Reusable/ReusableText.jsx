import { StyleSheet, Text } from 'react-native'
import React from 'react'


const ReusableText = ({ text, family, size, color,align }) => {
  const textStyle = {
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
  };
  return (
    <Text style={textStyle}>{text}</Text>
  );
}

export default ReusableText;
