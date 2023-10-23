import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Pressable, Text, View, Image, Dimensions } from "react-native";
import { useRoute } from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core';
import { API, Auth } from 'aws-amplify';

import { getAprendiz } from '../../../graphql/queries';

const UserProfileView = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const [ id ] = useState(route?.params?.ID)
    const [ aprendiz, setAprendiz ] = useState('')

    useEffect(() => {
      async function fetchData() {
        try {
          const responseAprendiz = await API.graphql({
            query: getAprendiz,
            variables: { id },
          });
    
          setAprendiz(responseAprendiz.data.getAprendiz);
  
          console.log(aprendiz);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Informações Pessoais</Text>
              <Text style={styles.userInfo}>{aprendiz.nome} {' '} {aprendiz.sobrenome}</Text>
            </View>
            <View>
              <Image
                style={styles.avatar}
                source={require("../../../../assets/icons/info-icon.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Nome</Text>
            <Text style={styles.SubjectText}>{aprendiz.nome}</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Sobrenome</Text>
            <Text style={styles.SubjectText}>{aprendiz.sobrenome}</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Idade</Text>
            <Text style={styles.SubjectText}>{aprendiz.idade}</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Cargo</Text>
            <Text style={styles.SubjectText}>{aprendiz.cargo}</Text>
          </Pressable>
        </View>
      </View>
    );
  }

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    backgroundSize: "contain",
    height: screenHeight * 0.25,
    marginTop: 20
  },

  headerContent: {
    padding: 30,
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  location: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  hamburger: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  name: {
    fontSize: 22,
    color: "black",
  },
  headtText: {
    color: "grey",
    marginLeft: 20,
    marginTop: 10
  },
  SubjectText: {
    color: "black",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10
  },
  userInfo: {
    fontSize: 20,
    color: "black",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#3B525F",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    padding: "6px",
    elevation: 3
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 10
  },
  RectangleShapeView: {
    marginTop: 20,
    width: "80%",
    height: 80,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3
  }
});


export default UserProfileView;