import React, { useState } from 'react';
import {Button, Text, TextInput, View} from 'react-native';

interface Mahasiswa {
  namaMahasiswa: string;
  Prodi: string;
}

const Mahasiswa = (props: Mahasiswa) => {
  return (
    <View>
      <Text>Halo saya {props.namaMahasiswa} dari {props.Prodi}</Text>
    </View> 
  );
}

const App = () => {
  const [waktu,setWaktu] = useState("Belum Waktu Berbuka");
  const [inputNama ,setInputNama] = useState("");
  return (
    <View>
      <Text>Sekarang {waktu}</Text>
      <Button 
      title='Ubah Waktu'
      onPress = {() => {setWaktu("Sudah Waktunya berbuka")}}
      />
      <Mahasiswa namaMahasiswa="Rizky" Prodi="S1 Teknik Komputer" />
      <TextInput 
        onChangeText={(text) => {setInputNama(text)}}
        />
        <Text>{inputNama}</Text>
    </View>
  );
};

export default App;
