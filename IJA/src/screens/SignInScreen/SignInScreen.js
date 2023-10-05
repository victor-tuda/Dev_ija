import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

import { Auth,  Amplify } from 'aws-amplify';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  async function signIn() {
    try {
      const user = await Amplify.Auth.signIn(username, password);
      console.log('User signed in:', user);
  
      // Return the user object
      return user;
    } catch (error) {
      console.log('Error signing in', error);
      throw error;
    }
  }
  

  const onSignInPressed = async () => {
    try {
      const user = await signIn();
      // Check if user is defined (i.e., sign-in was successful)
      if (user) {
        const role =  await Auth.currentAuthenticatedUser();
        console.log(role.signInUserSession.accessToken.payload["cognito:groups"])

        navigation.navigate('Home');
      } else {
        // Handle unsuccessful sign-in
        // You can display an error message to the user
      }
    } catch (error) {
      // Handle any errors thrown during sign-in
      // You can also display an error message to the user
      console.log('Error during sign-in:', error);
    }
  };
  

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
