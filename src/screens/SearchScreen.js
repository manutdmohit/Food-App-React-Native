import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const { data } = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose',
      },
    });
    setResults(data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Found {results.length} results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
