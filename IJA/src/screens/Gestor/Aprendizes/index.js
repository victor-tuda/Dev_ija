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

import { createTarefa, updateAprendiz } from '../../../graphql/mutations';
import { getGestor, listAprendizs, listTarefaAprendizs } from '../../../graphql/queries';





const Aprendizes = () => {
    const [aprendizesDoGestor, setAprendizesDoGestor] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const [ id ] = useState(route?.params?.ID)

    useEffect(() => {
        async function fetchData() {
          try {
            // Capturar os Aprendizes desse gestor
            const responseObj = await API.graphql({
              query: getGestor,
              variables: { id },
            });
            const responseGestor = responseObj.data.getGestor.GestorAprendizes.items
            setAprendizesDoGestor(responseGestor);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        fetchData();
      }, []);

    const onRegisterPressed = async () => {
        try {
          const tarefaObj = await API.graphql({
            titulo: titulo,
            descricao: descricao,
            dataIni: dataIni,
            horaIni: horaIni,
            gestorID: id
          });

          tarefaRetorno = await API.graphql(graphqlOperation(createTarefa, {input: tarefaObj}))


        }catch(error){
            Alert.alert('Oops', error.message)
           }
        };
        
    

    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cont1}>
            <Text style={styles.title}>Seus Aprendizes</Text>
        </View>

        <View>
            {aprendizesDoGestor.length === 0 ? (
            <View>
                <View style={styles.secondContainer}>
                    <View style={styles.secondContainerImageText}>
                        <Image style={styles.secondContainerImage}
                            source={require('../../../../assets/images/vazio.png')}
                        />
                        <Text style={styles.text}>Parece que não tem nenhum aprendiz.</Text>
                    </View>
                </View>
                <View style={styles.returnButton}>
                  <CustomButton text="Novo Aprendiz" onPress={() => navigation.navigate('NovoAprendizGestor', { id })} />
                  <CustomButton text="Voltar" bgColor={"#444654"} onPress={() => navigation.navigate('HomeScreenGestor')} />
                </View>
            </View>
            ) : (
            <View>
              {aprendizesDoGestor.map((item, index) => (
                <Card
                  key={index}
                  idAprendiz={item.id}
                  nome={item.nome}
                  sobrenome={item.sobrenome}
                  cargo={item.cargo}
                  setor={item.setor}
                  dataIInicioContratacao = {item.dataIinicioContratacao}
                />
              ))}

                <View style={styles.cont1}>                  
                    <CustomButton text="Novo Aprendiz" onPress={() => navigation.navigate('NovoAprendizGestor', { id })} />
                    <CustomButton text="Voltar" bgColor={"#444654"} onPress={() => navigation.navigate('HomeScreenGestor')} />
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
        marginTop: 10,
        height: screenHeight * 0.45,
        justifyContent: "center",
        alignItems: "center",
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