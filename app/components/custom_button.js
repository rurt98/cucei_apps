import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      buttonView: {
        width: '100%',
        paddingHorizontal: 40,
      },
});

export default CustomButton;
