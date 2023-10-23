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

import { API, Auth } from 'aws-amplify';

import { getAprendiz, listTarefaAprendizs } from '../../../graphql/queries';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tarefas, setTarefas] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        const userObj = await Auth.currentAuthenticatedUser();
        const id = userObj.attributes.sub;
        setID(id);

        const responseAprendizTarefas = await API.graphql({
          query: listTarefaAprendizs,
        });
        
        const aprendizTarefas = responseAprendizTarefas
        const userName = userObj.attributes.given_name;
        const userLastName = userObj.attributes.middle_name;
        setName(userName);
        setLastName(userLastName);

        setTarefas(aprendizTarefas.items);
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
        <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo', { ID })}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Horarios')}>
          <View style={styles.circle}>
            <Image
              source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/calendar-icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>Horários</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Relatorios')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Relatorios')}>
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
      <View style={styles.thirdContainer}>
        {tarefas === undefined ? (
          <View style={styles.thirdContainerImageText}>
                <Image style={styles.thirdContainerImage}
                  source={require('/home/victor/Workspace/Dev_ija/IJA/assets/icons/green-tea-icon.png')}
                />
                <Text style={styles.text}>Sem novas novas tarefas!</Text>
          </View>
                
        ) : (
          <Text>Not und</Text>
        )}
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
