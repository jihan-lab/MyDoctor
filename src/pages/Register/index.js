import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [form, setForm] = useForm({
  //   fullName: '',
  //   profession: '',
  //   email: '',
  //   password: '',
  // });

  const onContinue = () => {
    console.log(fullName, profession, email, password);
    // event.preventDefault();
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('message : ', user);
        // ...
      })
      .catch(error => {
        var errorCode = error.code;
        const errorMessage = error.message;
        console.log('error register : ', errorCode);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={value => setFullName(value)}
            // onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={value => setProfession(value)}
            // onChangeText={value => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={email}
            onChangeText={value => setEmail(value)}
            // onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            // onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
