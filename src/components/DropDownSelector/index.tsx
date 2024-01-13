/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface InputProps {
  handleSubmit: (value: any) => void;
  value?: string;
  placeholder: string;
  title: string;
  errors?: string;
}

export function Selector({
  handleSubmit,
  value,
  placeholder,
  title,
}: InputProps) {
  const { textInputContainer, label, input } = styles;

  return (
    <TouchableOpacity onPress={() => handleSubmit(value)}>
      <View style={[textInputContainer]}>
        <Text style={[label, { fontFamily: 'Baloo2_500Medium' }]}>
          {title}
        </Text>
        <View>
          <TextInput
            style={[
              input,
              { fontFamily: 'Baloo2_500Medium' },
            ]}
            placeholder={placeholder}
            value={value}
            editable={false}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
