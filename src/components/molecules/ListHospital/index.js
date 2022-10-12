import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyHospitals1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={DummyHospitals1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
