/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import ActivitiyIndicator from '../../ActivityIndicator';
import React from 'react';

interface ButtonProps {
    handleSubmit: (value: any) => void;
    title: string;
    disabled?: boolean;
    loading?: boolean;
    errorMessage?: string;
    error?: boolean;
}

export function Button({
    title,
    handleSubmit,
    disabled,
    loading,
    errorMessage = 'There was an error, please try again.',
    error,
}: ButtonProps) {
    const { container, buttonText, errorStyle } = styles;
        return (
            <View>
                <TouchableOpacity
                    style={[
                        container,
                        { backgroundColor: disabled ? '#90929C' : '#1C317E' },
                    ]}
                    onPress={disabled ? undefined : handleSubmit}
                >
                    <Text
                        style={[buttonText, { fontFamily: 'Baloo2_500Medium' }]}
                    >
                        {!loading && title}
                        {loading && (
                            <ActivityIndicator size={25} color="#ffffff" />
                        )}
                    </Text>
                </TouchableOpacity>
                {error && <Text style={[errorStyle]}>{errorMessage}</Text>}
            </View>
        );
}
