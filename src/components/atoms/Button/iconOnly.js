import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
