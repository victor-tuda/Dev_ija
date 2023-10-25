import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert, Image, Dimensions, Touchable, TouchableOpacity} from 'react-native';
import { useForm } from 'react-hook-form'
import {useNavigation} from '@react-navigation/core';
import { useRoute } from '@react-navigation/native'

import { Auth, API, graphqlOperation } from 'aws-amplify';
import AWS from 'aws-sdk';

import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import Card from '../../../components/CardAprendiz';

import { updateAprendiz, updateGestor } from '../../../graphql/mutations';
import { getGestor, listAprendizs, listTarefaAprendizs } from '../../../graphql/queries';

const Aprendizes = () => {
    const [aprendizesSemGestor, setAprendizesSemGestor] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const [ id ] = useState(route?.params?.id)
    const [aprendizesSelecionados, setAprendizesSelecionados] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [cardStates, setCardStates] = useState({});

    const handleCheckboxPress = (aprendizObj) => {
      // Toggle the isChecked state for the corresponding card
      setCardStates((prevState) => ({
        ...prevState,
        [aprendizObj.id]: !prevState[aprendizObj.id],
      }));

    // Add or remove the aprendizObj from aprendizesSelecionados
    if (cardStates[aprendizObj.id]) {
      setAprendizesSelecionados(aprendizesSelecionados.filter((obj) => obj.id !== aprendizObj.id));
    } else {
      setAprendizesSelecionados([...aprendizesSelecionados, aprendizObj]);
    }
  };


    useEffect(() => {
        async function fetchData() {
          try {
            // Capturando todos os Aprendizes sem Gestor
            const responseListAprendizes = await API.graphql(graphqlOperation(listAprendizs, 
                {      
                    filter: { gestorID: { attributeExists: false } } // Criando um filtro
              }));
              setAprendizesSemGestor(responseListAprendizes.data.listAprendizs.items)
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [onRegisterPressed]);

    const onRegisterPressed = async () => {
        try {
          for (const aprendiz of aprendizesSelecionados){
            const aprendizDetails = {
              id: aprendiz.id,
              gestorID: id
            };
            const updatedAprendiz = await API.graphql({ 
              query: updateAprendiz, 
              variables: { input: aprendizDetails }
            });
            
            console.log(aprendiz.nome)
          }
          // const tarefaObj = await API.graphql({
          //   titulo: titulo,
          //   descricao: descricao,
          //   dataIni: dataIni,
          //   horaIni: horaIni,
          //   gestorID: id
          // });

          // tarefaRetorno = await API.graphql(graphqlOperation(createTarefa, {input: tarefaObj}))


        }catch(error){
            Alert.alert('Oops', error.message)
           }
        };
        
    

    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cont1}>
            <Text style={styles.title}>Atribua um Aprendiz</Text>
        </View>

        <View>
            {aprendizesSemGestor.length === 0 ? (
            <View>
                <View style={styles.secondContainer}>
                    <View style={styles.secondContainerImageText}>
                        <Image style={styles.secondContainerImage}
                            source={require('../../../../assets/images/cv.png')}
                        />
                        <Text style={styles.text}>Sem aprendizes para atribuir!</Text>
                    </View>
                </View>
                <View style={styles.returnButton}>
                    <CustomButton text="Voltar" onPress={() => navigation.navigate('HomeScreenGestor')} />
                </View>
            </View>
            ) : (
            <View>
              {aprendizesSemGestor.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCheckboxPress(item)}
                  onLongPress={() => navigation.navigate('PersonalInfoAprendiz', { idAprendiz: item.id })}
                >
                  <View style={styles.cardContainer}>
                    <Card
                      key={index}
                      borderColor={ cardStates[item.id] ? 'green': 'black' }
                      idAprendiz={item.id}
                      nome={item.nome}
                      sobrenome={item.sobrenome}
                      cargo={item.cargo}
                      setor={item.setor}
                      dataIInicioContratacao = {item.dataIinicioContratacao}
                    />
                  </View>
                </TouchableOpacity> 
                
              ))}

                <View style={styles.cont1}>
                    <CustomButton text="Atribuir Aprendiz" onPress={onRegisterPressed} />
                </View>
            </View>
            )}
        </View>

    </ScrollView>
    )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    cont1: {
      alignItems: 'center',
      padding: 20,
      marginTop: 60,
      marginBottom: 20,
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
    secondContainer: {
        marginHorizontal: 30,
        marginTop: 30,
        height: screenHeight * 0.45,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#D3E0EA",
        borderRadius:20
      },
      secondContainerImageText: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      },
      secondContainerImage: {
        width: 160,
        height: 160,
      },
      secondContainerText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'white',
      },
      returnButton: {
        marginTop: 25,
        marginHorizontal: 30,
        alignItems: 'center'
      },
  });

export default Aprendizes;