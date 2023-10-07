import { React, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from 'aws-amplify';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [userName, setUserName] = useState('');

  async function getUserName(){
    const userObj =  await Auth.currentAuthenticatedUser();
    const name = userObj.attributes.name
    setUserName(name)
  }
  getUserName();
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../assets/images/ija-logo.png')} // Substitua pelo caminho da imagem do jovem aprendiz
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.greetingText}>Olá {userName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // 20% da largura da tela
    backgroundColor: '#343541', // Cor de fundo do container
    padding: 30,
    marginTop: 35
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50, // Largura da imagem circular
    height: 50, // Altura da imagem circular
    borderRadius: 25, // Para criar uma imagem circular
    backgroundColor: '#fff'
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end'
  },
});

export default HomeScreen;
