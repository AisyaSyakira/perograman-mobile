import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Dinda = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Dinda.png')}
        judul="Dinda Putri Khoirunnisa"
        lahir="7 Juli 2003"
        umur="20 Tahun"
        tinggal="Gunungguruh, Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0857-2064-4655"
        email="Dindaputriik69@ummi.ac.id"
        quotes="Prioritaskan dirimu, impianmu, dan tujuanmu"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Dinda;