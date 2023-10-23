// imports from React
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// imports locals
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

import HomeScreenAprendiz from '../screens/Aprendiz/HomeScreen';
import HomeScreenGestor from '../screens/Gestor/HomeScreen'
import PersonalInfo from '../screens/Aprendiz/PersonalInfo';
import Relatorios from '../screens/Aprendiz/Relatórios';
import Horarios from '../screens/Aprendiz/Horarios';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name="HomeScreenAprendiz" component={HomeScreenAprendiz} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="Relatorios" component={Relatorios} />
        <Stack.Screen name="Horarios" component={Horarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
