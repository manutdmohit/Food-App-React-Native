import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ccc6c4',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
