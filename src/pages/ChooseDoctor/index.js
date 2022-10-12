import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor type="next" onPress={() => navigation.navigate('Chatting')} />
      <ListDoctor type="next" onPress={() => navigation.navigate('Chatting')} />
      <ListDoctor type="next" onPress={() => navigation.navigate('Chatting')} />
      <ListDoctor type="next" onPress={() => navigation.navigate('Chatting')} />
      <ListDoctor type="next" onPress={() => navigation.navigate('Chatting')} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
