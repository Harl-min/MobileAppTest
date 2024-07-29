import React from 'react';
import { Text as DefaultText, Text, TextProps, View, ViewProps } from 'react-native';

type ThemeProps = {
  isDarkMode?: boolean;
};

export function Theme(props: TextProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <Text style={[
      style,
      {
        color: isDarkMode ? 'gray' : 'black',
        opacity: isDarkMode ? 1 : 0.6,
      },
    ]}
    {...rest}/>
  );
}

export function Card(props: ViewProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <View style={[
      style,
      {
        backgroundColor: isDarkMode ? '#202120' : '#121212',
        opacity: isDarkMode ? 1 : 0.6,
      },
    ]}
    {...rest}/>
  );
}