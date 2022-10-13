import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMe from './isMe';
import Other from './Other';

export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }

  return <Other />;
}
