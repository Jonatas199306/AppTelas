import React from  'react';
import  {View, Text, TouchableOpacity, Touchable } from 'react-native';
import {useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function tela4(){
    const navi = useNavigation(); 

    function naviToTela2(){
        navi.navigate('menu');
    }
    return (
     <View style={styles.container}>
         <TouchableOpacity
            onPress={naviToTela2}           >
             <Text>Tela 1</Text>
         </TouchableOpacity>

</View>

    )
}