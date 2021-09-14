import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import {useNavigation } from '@react-navigation/native';



export default function tela5() {


const [number,setNumber] = useState(1); //toca na tela do nome Incrementador pra trocar valor!
//const [nome, setNome] = useState('');
const navi = useNavigation(); 
function increment(){
  setNumber(number+2);
  
}
function naviToTela2(){
  navi.navigate('menu');
}


useEffect(()=>{
  console.log('Executou o useEffect');
  console.log('novo');
} ,[]);


  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.Button}
      onPress={increment}
      >

         <Text style={styles.Text}>Incrementador</Text>
      </TouchableOpacity>

      <Text style={styles.Text}>Valor: {number}</Text>

      <StatusBar style="auto" />

      <TouchableOpacity
            onPress={naviToTela2}           >
             <Text>Tela 1</Text>
         </TouchableOpacity>
      
    </View>

    
  );
}













