import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Isti = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/ziyah.jpg')}
        judul="ziyah sakainah"
        lahir="30 Oktober 2002"
        umur="21 Tahun"
        tinggal="Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0812-8954-4539"
        email="ziyahsakinah@gmail.com"
        quotes="sakinah mawadah warohmah"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Isti;