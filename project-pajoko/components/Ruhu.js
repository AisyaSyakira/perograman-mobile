import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Ruhu = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Ruhu.png')}
        judul="Siti Ruhu Salamah"
        lahir="18 Maret 2003"
        umur="21 Tahun"
        tinggal="Cicurug, Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0858-6450-3792"
        email="sruhusalamah067@ummi.ac.id"
        quotes="man jadda wajada"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Ruhu;