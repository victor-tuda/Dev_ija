import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { getGestor } from '../../../graphql/queries';
import { createGestor } from '../../../graphql/mutations';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gestor, setGestor] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        // Capturando as informações de autenticação do usuário
        const userObj = await Auth.currentAuthenticatedUser();
        const id = userObj.attributes.sub;
        setID(id);

        // Capturando o Gestor relacionado ao ID de autenticação
        const verificaGestor = await API.graphql({
          query: getGestor,
          variables: { id },
        }
        );
        // Salvando em uma variável o objeto retornado
        const gestorObj = verificaGestor.data.getGestor;
        setGestor(gestorObj);

        // Verificando se esse objeto está vazio
        if (gestorObj === null){
          const gestorObj = {
            id: userObj.attributes.sub,
            nome: userObj.attributes.given_name,
            sobrenome: userObj.attributes.middle_name,                                                            
            email: userObj.attributes.email,
            celular: userObj.attributes.phone_number,            
          }

          // Caso não exista, crie um na tabela
          gestorRetorno = await API.graphql(graphqlOperation(createGestor, {input: gestorObj}))
          setGestor(gestorRetorno)
        }

        // Capturando informações finais
        const userName = userObj.attributes.given_name;
        const userLastName = userObj.attributes.middle_name;
        setName(userName);
        setLastName(userLastName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.firstcontainer}>
        <View style={styles.content}>
          <Text style={styles.userName}>Olá,</Text>
          <Text style={styles.userName}>
            {name + ' ' + lastName}
          </Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalInfoGestor', { ID })}>
          <View style={styles.circle}>
            <Image
              source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/info-icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TarefasGestor', { ID })}>
          <View style={styles.circle}>
            <Image
              source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/tarefas-icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>Tarefas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RelatoriosGestor')}>
          <View style={styles.circle}>
            <Image
              source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/document-icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>Relatórios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
          <View style={styles.circle}>
            <Image
              source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/plus-icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>Ver mais</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  firstcontainer: {
    height: screenHeight * 0.28,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginBottom: 15
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 5,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#D3E0EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 3,
  },
  thirdContainer: {
    marginHorizontal: 30,
    marginTop: 30,
    height: screenHeight * 0.28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#D3E0EA",
    borderRadius:20
  },
  thirdContainerImageText: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  thirdContainerImage: {
    width: 80,
    height: 80,
  },
  thirdContainerText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreen;
