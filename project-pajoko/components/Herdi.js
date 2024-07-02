import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Herdi = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/herdi.jpg')}
        judul="Herdi Alfachri"
        lahir="7 Juli 2003"
        umur="20 Tahun"
        tinggal="Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0831-3144-8108"
        email="herdijeles@ummi.ac.id"
        quotes="Minimal Mandi"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Herdi;