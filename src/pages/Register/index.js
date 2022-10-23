import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = event => {
    event.preventDefault();
    setLoading(true);

    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');
        console.log(form);
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        console.log('message : ', success);
      })
      .catch(error => {
        var errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('error register : ', error);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Input
                label="Full Name"
                value={form.fullName}
                // onChangeText={value => setFullName(value)}
                onChangeText={value => setForm('fullName', value)}
              />
              <Gap height={24} />
              <Input
                label="Pekerjaan"
                value={form.profession}
                // onChangeText={value => setProfession(value)}
                onChangeText={value => setForm('profession', value)}
              />
              <Gap height={24} />
              <Input
                label="Email Address"
                value={form.email}
                // onChangeText={value => setEmail(value)}
                onChangeText={value => setForm('email', value)}
              />
              <Gap height={24} />
              <Input
                label="Password"
                value={form.password}
                // onChangeText={value => setPassword(value)}
                onChangeText={value => setForm('password', value)}
                secureTextEntry
              />
              <Gap height={40} />
              <Button title="Continue" onPress={onContinue} />
            </View>
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
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
