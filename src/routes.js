import React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import menu from './screens/menu';
import tela3 from './screens/tela3';
import tela4 from './screens/tela4';
import tela5 from './screens/tela5';

const Stack = createNativeStackNavigator();

 
export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
            name='menu'component={menu} />
            <Stack.Screen  
            name='tela3'component={tela3} />
            <Stack.Screen
           
             name='tela4'component={tela4} />
            <Stack.Screen  
            name='tela5'component={tela5} />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}
