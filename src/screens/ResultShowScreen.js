import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState({});
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const { data } = await yelp.get(`/${id}`);
    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
