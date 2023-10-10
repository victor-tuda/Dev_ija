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

// import from expo
import { AntDesign } from '@expo/vector-icons';

// importando bibliotecas amplify
import { Auth,  Amplify } from 'aws-amplify';

// importando bibliotecas locais
import Logo from '../../../assets/images/ija-logo.png';
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

        setLoading(false)

        if (role == "Aprendiz") navigation.navigate('HomeScreenAprendiz')
        else if (role == "Gestor") navigation.navigate('HomeScreenGestor')
        else Alert.alert("Aguarde a empresa liberar o acesso");
        
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
      <View style={styles.cont1}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.cont2}>
        <CustomInput
          icon="user"
          placeholder="Email"
          value={username}
          setValue={setUsername}
          autoCap={"none"}
          
        />
        <CustomInput
          icon="lock"
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          secureTextEntry
          autoCap={"none"}
        />

        <CustomButton text={loading ? "Carregando..." : "Entrar" } onPress={onSignInPressed} />

        <CustomButton
          text="Esqueceu a senha?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Não tem uma conta? Crie uma aqui."
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cont1: {
    alignItems: 'center',
    marginTop: 40,
  },
  cont2: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
