import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import {Header, List} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const [listDoctor, setListDoctor] = useState([]);

  const itemCategory = route.params;
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, []);

  const callDoctorByCategory = category => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setListDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="next"
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            profile={{uri: doctor.data.photo}}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
