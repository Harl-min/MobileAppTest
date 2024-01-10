/* eslint-disable prettier/prettier */
import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface InputProps {
    onChangeAccountNo?: (text: string) => void;
    value?: string;
    placeholder: string;
    title: string;
    errors?: string;
  }

export function Input({
    onChangeAccountNo,
    value,
    placeholder,
    title,
    errors,

}: InputProps) {
    const { textInputContainer, label, input, errorText, errorContainer } =
        styles;
        return (
            <View style={[textInputContainer]}>
                <Text style={[label, { fontFamily: 'Baloo2_500Medium' }]}>
                    {title}
                </Text>
                <TextInput
                    style={[input, { fontFamily: 'Baloo2_500Medium' }]}
                    placeholder={placeholder}
                    onChangeText={onChangeAccountNo}
                    value={value}
                />

                <View style={errorContainer}>
                    <Text style={errorText}> {errors}</Text>
                </View>
            </View>
        );
}
