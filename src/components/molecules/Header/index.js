import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

export default function Header({onPress, title, type}) {
  if (type === 'dark-profile') {
    return <DarkProfile />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    flex: 1,
  }),
});
