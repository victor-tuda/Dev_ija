// importando bibliotecas react
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert
} from 'react-native';

// importando bibliotecas amplify
import { Auth,  Amplify } from 'aws-amplify';

// importando bibliotecas locais
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

// main component
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function signIn() {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const user = await Amplify.Auth.signIn(username, password);
      console.log('User signed in:', user);
  
      return user; // Return the user object
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
  }
  

  const onSignInPressed = async () => {
    try { // Checa se o usuário conseguiu realizar o login
      const user = await signIn();
      
      if (user) {
        const userObj =  await Auth.currentAuthenticatedUser(); // Captura o objeto do usuario
        const role = userObj.signInUserSession.accessToken.payload["cognito:groups"] // Captura o groupID do usuario
        console.log(role);

        navigation.navigate('Home'); //Navega para a tela Home
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

        <CustomButton text={loading ? "Loading..." : "Sign In" } onPress={onSignInPressed} />

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
