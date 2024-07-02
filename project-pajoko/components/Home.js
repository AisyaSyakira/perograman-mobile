import React from 'react'
import {Text, View, Stylesheet, Button} from 'react-native';
import Contact from './kontak'

const Home=({navigation}) =>{
  return(
    <View>
    <Contact 
        gambar={require('../assets/herdi.jpg')}
        judul="Herdi Alfachri"
        status="Mahasiswa"
        telpon="0831-3144-8108"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Herdi')}/>
    <Contact 
        gambar={require('../assets/zealsa.jpg')}
        judul="Zealsa Isa Firdaus"
        status="Pengusaha"
        telpon="0819-0688-6153"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail zealsa')}/>
    <Contact 
        gambar={require('../assets/Azizah.png')}
        judul="Siti Nurazizah"
        status="Mahasiswa"
        telpon="0858-9250-1681"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Siti Nurazizah')}/>
    <Contact 
        gambar={require('../assets/ziyah.jpg')}
        judul="Ziyah Sakinah"
        status="Mahasiswa"
        telpon="0812-8954-4539"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail ziyah')}/>
    <Contact 
        gambar={require('../assets/Dinda.png')}
        judul="Dinda Putri Khoirunnisa"
        status="Mahasiswa"
        telpon="0857-2064-4655"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Dinda Putri Khoirunnisa')}/>
    <Contact 
        gambar={require('../assets/Ruhu.png')}
        judul="Siti Ruhu Salamah"
        status="Mahasiswa"
        telpon="0858-6450-3792"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Siti Ruhu Salamah')}/>
    </View>
  )
};

export default Home;