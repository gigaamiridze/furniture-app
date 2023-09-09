import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IBackButtonProps } from '../../interfaces';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';

function BackButton(props: IBackButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons 
        name='chevron-back-circle'
        color={Colors.BLACK}
        size={30}
      />
    </TouchableOpacity>
  )
}

export default BackButton;
