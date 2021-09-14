import React from  'react';
import  {View, Text, TouchableOpacity, Touchable } from 'react-native';
import {useNavigation } from '@react-navigation/native';

import styles from './styles';
export default function menu(){
    const navi = useNavigation();
    function naviToTela1(){
        navi.navigate('tela3');
    }
        function naviToTela2(){
            navi.navigate('tela4');
        }
            function naviToTela3(){
                navi.navigate('tela5'); //muda navegação, em qual pagina ele vai
    }
    return (
     <View style={styles.container}>
          

         <TouchableOpacity onPress={naviToTela1}            >
             <Text>Tela 1</Text>        
         </TouchableOpacity>
         
         <TouchableOpacity onPress={naviToTela2}            >
             <Text>Tela 2 </Text>        
         </TouchableOpacity>
    
         <TouchableOpacity onPress={naviToTela3}            >
             <Text>Hooks</Text>        
         </TouchableOpacity>
         
</View>
    )


      }
    