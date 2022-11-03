import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';

export default function DoctorProfile({navigation, route}) {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
      <ProfileItem
        label="Tempat Praktik"
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
