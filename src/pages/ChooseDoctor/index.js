import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, List} from '../../components';
import {colors} from '../../utils';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        onPress={() => navigation.navigate('Chatting')}
        name="Alexander Jannie"
        desc="Wanita"
        profile={DummyDoctor1}
      />
      <List
        type="next"
        onPress={() => navigation.navigate('Chatting')}
        name="John McParker Steve"
        desc="Pria"
        profile={DummyDoctor2}
      />
      <List
        type="next"
        onPress={() => navigation.navigate('Chatting')}
        name="Nairobi Putri Hayza"
        desc="Wanita"
        profile={DummyDoctor3}
      />
      <List
        type="next"
        onPress={() => navigation.navigate('Chatting')}
        name="James Rivillia"
        desc="Pria"
        profile={DummyDoctor5}
      />
      <List
        type="next"
        onPress={() => navigation.navigate('Chatting')}
        name="Liu Yue Tian Park"
        desc="Wanita"
        profile={DummyDoctor4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
