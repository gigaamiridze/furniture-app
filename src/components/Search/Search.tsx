import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Colors, Sizes } from '../../constants';
import { ISearchProps } from '../../interfaces';
import { style } from './style';

function Search(props: ISearchProps) {
  const { placeholder, firstIcon, secondIcon, onSearch } = props;
  const [search, setSearch] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  }

  return (
    <Pressable style={style.searchContainer}>
      <Ionicons 
        name={firstIcon}
        size={Sizes.X_LARGE}
        style={style.firstIcon}
      />
      <TextInput 
        placeholder={placeholder} 
        value={search}
        onChangeText={(value) => handleSearch(value)}
        style={style.searchInput}
      />
      <TouchableOpacity style={style.searchBtn}>
        <Ionicons 
          name={secondIcon}
          size={Sizes.X_LARGE}
          color={Colors.WHITE} 
        />
      </TouchableOpacity>
    </Pressable>
  )
}

export default Search;
