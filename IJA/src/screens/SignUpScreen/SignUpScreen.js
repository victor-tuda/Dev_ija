import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import { useForm } from 'react-hook-form'
import {useNavigation} from '@react-navigation/core';

import { Auth } from 'aws-amplify';
import AWS from 'aws-sdk';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import awsExports from '../../aws-exports';

Auth.configure(awsExports);

// Configure the AWS SDK with Amplify's configuration
AWS.config.update({
  accessKeyId: awsExports.aws_access_key_id,
  secretAccessKey: awsExports.aws_secret_access_key,
  region: awsExports.aws_region,
});

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const [email, setEmail] = useState("");
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    try {
      const response = await Auth.signUp({
        name,
        username: email,
        phone_number,
        password,
      });
      navigation.navigate('ConfirmEmail', { email });
  
 
      /* Mudar o user group de forma automática
      const cognito = new AWS.CognitoIdentityServiceProvider();
      
      // const params = {
      //   GroupName: 'aprendiz',
      //   UserPoolId: awsExports.aws_user_pools_id,
      //   Username: username,
      // };

      // cognito.adminAddUserToGroup(params, function (err, data) {
      //   if (err) {
      //     console.error('Error adding user to group:', err);
      //   } else {
      //     console.log('User added to group successfully:', data);
      //   }
    })
    */ 

    }catch(error){
      Alert.alert('Oops', error.message)
     }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');

  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.cont1}>
        <Text style={styles.title}>Crie uma conta</Text>
      </View>

      <View style={styles.cont2}>
        <CustomInput
          placeholder="Nome"
          value={name}
          setValue={setName}
        />

        <CustomInput
          placeholder="Sobrenome"
          value={lastName}
          setValue={setLastName}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Telefone" value={phone_number} setValue={setPhone_number} />

        <CustomInput
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repita a senha"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Cadastrar" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          Ao registrar, você concorda com nossos{'\n '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Termos de Uso
          </Text>{' '}
          e{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Políticas de Privacidade
          </Text>
        </Text>

        <CustomButton
          text="Já tem uma conta? Faça o Login"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cont1: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40
  },
  cont2: {
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

export default SignUpScreen;
