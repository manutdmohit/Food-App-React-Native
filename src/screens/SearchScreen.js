import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Found {results.length} results</Text>
      <ResultList
        results={filterResultByPrice('$')}
        title="Cost Effective"
        results={filterResultByPrice('$')}
      />
      <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
      <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
