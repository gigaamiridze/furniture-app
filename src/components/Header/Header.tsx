import React from 'react';
import { Text } from 'react-native';
import { IHeaderProps } from '../../interfaces';
import { getFontFamily } from '../../utils';
import { style } from './style';

function Header(props: IHeaderProps) {
  const { title, type, color, numberOfLines, fontWeight } = props;

  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      case 4:
        return style.title4;
      case 5:
        return style.title5;
      case 6:
        return style.title6;
      default:
        return style.title1;
    }
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={
        [
          style.title,
          styleToApply(),
          color ? { color: color } : null,
          fontWeight ? { fontFamily: getFontFamily('Poppins', fontWeight) } : null
        ]
      }
    >
      {title}
    </Text>
  )
}

export default Header;
