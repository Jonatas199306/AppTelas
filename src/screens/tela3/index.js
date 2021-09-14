import React from  'react';
import  {View, Text, TouchableOpacity, Touchable } from 'react-native';
import {useNavigation } from '@react-navigation/native';

import styles from './styles';
export default function tela3(){
    const navi = useNavigation();

    function naviToTela1(){
      navi.navigate('menu'); //volta pro inicio
    }
    return (
     <View style={styles.container}>
         <TouchableOpacity
            onPress={naviToTela1}            >
             <Text>Tela1</Text>
         </TouchableOpacity>

</View>

    )
}