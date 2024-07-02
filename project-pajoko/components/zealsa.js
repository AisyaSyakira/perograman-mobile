import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const zealsa = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/zealsa.jpg')}
        judul="Zealsa Isa Firdaus"
        lahir="24 juni 2002"
        umur="22 Tahun"
        tinggal="Bandung"
        status="Pengusaha"
        telpon="0819-0688-6153"
        email="zealsafirdaus@gmail.com"
        quotes="IS THAT IMPORTANT?"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default zealsa;