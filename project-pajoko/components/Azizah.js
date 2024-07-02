import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Azizah = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Azizah.png')}
        judul="Siti Nurazizah"
        lahir="22 Maret 2003"
        umur="21 Tahun"
        tinggal="Cicurug, Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0858-9250-1681"
        email="snazizah12@ummi.ac.id"
        quotes="Trust to god, everything is gonna be okay"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Azizah;