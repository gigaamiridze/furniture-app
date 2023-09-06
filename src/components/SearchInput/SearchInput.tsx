import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable, TouchableOpacity, TextInput } from 'react-native';
import { ISearchInputProps } from '../../interfaces';
import { Colors, Sizes } from '../../constants';
import { style } from './style';

function SearchInput(props: ISearchInputProps) {
  const { placeholder, firstIcon, secondIcon, onPress, onSearch } = props;
  const [search, setSearch] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch && onSearch(searchValue);
  }

  return (
    <Pressable style={style.searchContainer}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={firstIcon}
          size={Sizes.X_LARGE}
          style={style.firstIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={placeholder}
        value={search}
        onChangeText={(value) => handleSearch(value)}
        onPressIn={onPress}
        style={style.searchInput}
      />
      <TouchableOpacity 
        style={style.searchBtn}
        onPress={onPress}
      >
        <Ionicons
          name={secondIcon}
          size={Sizes.X_LARGE}
          color={Colors.WHITE}
        />
      </TouchableOpacity>
    </Pressable>
  )
}

export default SearchInput;
