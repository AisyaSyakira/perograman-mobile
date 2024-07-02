import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home'
import Contact from './components/kontak'
import Lengkap from './components/lengkap'
import Herdi from './components/Herdi'
import zealsa from './components/zealsa'
import Azizah from './components/Azizah'
import ziyah from './components/ziyah'
import Dinda from './components/Dinda'
import Ruhu from './components/Ruhu'


const Stack=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Daftar Teman Dekat" component={Home}/>
    <Stack.Screen name="Detail Herdi" component={Herdi}/>
    <Stack.Screen name="Detail zealsa" component={zealsa}/>
    <Stack.Screen name="Detail Siti Nurazizah" component={Azizah}/>
    <Stack.Screen name="Detail ziyah" component={ziyah}/>
    <Stack.Screen name="Detail Dinda Putri Khoirunnisa" component={Dinda}/>
    <Stack.Screen name="Detail Siti Ruhu Salamah" component={Ruhu}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}