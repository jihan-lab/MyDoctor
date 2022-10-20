import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, List, Profile} from '../../components';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shayna Melinda" desc="Product Designer" />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last update yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
