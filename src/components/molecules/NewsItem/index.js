import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image style={styles.image} source={DummyNews1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: 16,
    paddingBottom: 12,
  },
  titleWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '80%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16,
  },
});
