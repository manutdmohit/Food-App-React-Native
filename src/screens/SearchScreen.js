import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = (props) => {
  console.log(props.navigation);
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultByPrice('$')}
          title="Cost Effective"
          results={filterResultByPrice('$')}
        />

        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />

        <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
