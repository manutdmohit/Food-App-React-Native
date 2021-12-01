import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{ marginLeft: 15 }}>Found {results.length} results</Text>

      <ScrollView>
        <ResultList
          results={filterResultByPrice('$')}
          title="Cost Effective"
          results={filterResultByPrice('$')}
        />

        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />

        <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
