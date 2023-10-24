import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import { useForm } from 'react-hook-form'
import {useNavigation} from '@react-navigation/core';
import { useRoute } from '@react-navigation/native'

import { Auth, API, graphqlOperation } from 'aws-amplify';
import AWS from 'aws-sdk';

import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

import { createTarefa } from '../../../graphql/mutations'




const Tarefas = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataIni, setDataIni] = useState('');
    const [horaIni, setHoraIni] = useState('');
    const [gestorID, setgestorID] = useState('');
    
    const route = useRoute();

    const [ id ] = useState(route?.params?.ID)

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
            <Text style={styles.title}>Crie uma Tarefa</Text>
        </View>

      <View style={styles.cont2}>
        <CustomInput
          placeholder="Título"
          value={titulo}
          setValue={setTitulo}
        />

        <CustomInput
          placeholder="Descrição"
          value={descricao}
          setValue={setDescricao}
        />

        <CustomInput
            placeholder="Data de início"
            value={dataIni}
            setValue={setDataIni}
        />
        <CustomInput
            placeholder="Hora de início"
            value={horaIni}
            setValue={setHoraIni}
        />

        <CustomButton text="Criar Tarefa" onPress={onRegisterPressed} />

      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont1: {
      alignItems: 'center',
      padding: 20,
      marginTop: 40
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
  });

export default Tarefas;