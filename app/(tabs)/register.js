import React, { useState, useRef } from 'react';
import { useRouter } from 'expo-router';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import CustomButton from '../components/custom_button';
import InfoButton from '../components/info_button';
import CustomTextInput from '../components/custom_text_input';

const logo = require('../../assets/images/logo.png');

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const router = useRouter();

  const registerMethod = () => {
    // TODO: hacer registro y redireccionamiento si la sesión es válida
    console.log('Intentando iniciar sesión con', email, password, confirmPassword);
  };


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
    > 
       <Image source={logo} style={styles.image} />
        <CustomTextInput 
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() => passwordInputRef.current.focus()}
           />
        <CustomTextInput 
           placeholder="Password"
           onChangeText={setPassword}
           ref={passwordInputRef}
           secureTextEntry
           onEndEditing={() => confirmPasswordInputRef.current.focus()}
        />
         <CustomTextInput 
           placeholder="Confirmar Password"
           onChangeText={setConfirmPassword}
           ref={confirmPasswordInputRef}
           secureTextEntry
        />
      <CustomButton title={'Registrarse'} onPress={registerMethod} ></CustomButton>
      <InfoButton txt={'¿Ya tienes cuenta?'} txtButton={'Login'} onPress={() => router.back()} />
    </ScrollView>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    marginVertical: 70,
    width: 310,
    height: 160,
    alignSelf: 'center',
  },
});
