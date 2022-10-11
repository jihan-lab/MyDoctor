import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Text Header</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
    flex: 1,
  },
});
