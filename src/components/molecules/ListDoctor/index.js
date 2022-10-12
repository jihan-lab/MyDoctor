import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyDoctor3, IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor({type, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={DummyDoctor3} />
      <View style={styles.content}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
