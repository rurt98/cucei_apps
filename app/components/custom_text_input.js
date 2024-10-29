import React, { forwardRef } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = forwardRef(({ placeholder, keyboardType, onChangeText, onEndEditing }, ref) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                ref={ref} // Asigna la referencia aquí
                style={styles.input}
                placeholder={placeholder} // Corrige el nombre de la prop a 'placeholder'
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
                autoCapitalize='none'
            />
        </View>
    );
});

const styles = StyleSheet.create({
    input: {
        height: 50,
        paddingHorizontal: 20,
        color: 'gray',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    inputView: {
        gap: 15,
        width: '100%',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
});

export default CustomTextInput;
