import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({});
