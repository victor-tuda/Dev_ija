import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'

import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const { control, handleSubmit } = useForm();
  const [code, setCode] = useState('');
  const [ username ] = useState(route?.params?.username)
  
  
  const navigation = useNavigation();
  

  const onConfirmPressed = async data => {
    try{
      const response = await Auth.confirmSignUp(username, code)
      navigation.navigate('Home');
    } catch(error){
      Alert.alert("Oops", error.message);
    }
    
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = async () => {
    try{
      const response = await Auth.resendSignUp(username)
    } catch(error){
      Alert.alert("Oops", error.message);
    }
    
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
