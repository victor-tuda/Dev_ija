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
import PersonalInfoAprendiz from '../screens/Aprendiz/PersonalInfo';
import RelatoriosAprendiz from '../screens/Aprendiz/Relatórios';
import HorariosAprendiz from '../screens/Aprendiz/Horarios';

import HomeScreenGestor from '../screens/Gestor/HomeScreen'
import TarefasGestor from '../screens/Gestor/Tarefas';
import AprendizesGestor from '../screens/Gestor/Aprendizes';
import NovoAprendizGestor from '../screens/Gestor/NovoAprendiz';
import PersonalInfoGestor from '../screens/Gestor/PersonalInfo';
import RelatoriosGestor from '../screens/Gestor/Relatórios';
import HorariosGestor from '../screens/Gestor/Horarios';

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
        <Stack.Screen name="PersonalInfoAprendiz" component={PersonalInfoAprendiz} />
        <Stack.Screen name="RelatoriosAprendiz" component={RelatoriosAprendiz} />
        <Stack.Screen name="HorariosAprendiz" component={HorariosAprendiz} />

        <Stack.Screen name="HomeScreenGestor" component={HomeScreenGestor} />
        <Stack.Screen name="TarefasGestor" component={TarefasGestor} />
        <Stack.Screen name="AprendizesGestor" component={AprendizesGestor} />
        <Stack.Screen name="NovoAprendizGestor" component={NovoAprendizGestor} />
        <Stack.Screen name="PersonalInfoGestor" component={PersonalInfoGestor} />
        <Stack.Screen name="RelatoriosGestor" component={RelatoriosGestor} />
        <Stack.Screen name="HorariosGestor" component={HorariosGestor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
