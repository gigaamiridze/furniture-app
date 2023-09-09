import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IBackButtonProps } from '../../interfaces';
import { TouchableOpacity } from 'react-native';

function BackButton(props: IBackButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons 
        name='chevron-back-circle'
        size={30}
      />
    </TouchableOpacity>
  )
}

export default BackButton;
