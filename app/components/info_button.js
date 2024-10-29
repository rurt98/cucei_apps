import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const InfoButton = ({ txt, txtButton, onPress }) => {
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.txtStyle}>{txt}</Text>
        <Pressable onPress={onPress}>
            <Text style={styles.registerButton}>{txtButton}</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      txtStyle: {
        fontSize: 16,
        marginRight: 5,
      },
      txtButtonStyle: {
        color: 'blue',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 16,
      },
  });
  
  export default InfoButton;