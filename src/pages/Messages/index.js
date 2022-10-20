import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor8, DummyDoctor3} from '../../assets';

export default function Messages({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <List
          onPress={() => navigation.navigate('Chatting')}
          name="Alexander Jannie"
          profile={DummyDoctor1}
        />
        <List
          onPress={() => navigation.navigate('Chatting')}
          name="Nairobi Putri Hayzae"
          desc="Oh tentu saja tidak karena jeruk it..."
          profile={DummyDoctor8}
        />
        <List
          onPress={() => navigation.navigate('Chatting')}
          name="John McParker Steve"
          desc="Oke menurut pak dokter bagaimana unt..."
          profile={DummyDoctor3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
