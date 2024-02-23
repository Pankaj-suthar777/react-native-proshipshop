import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const ProductOverView = ({route}) => {
  const id = route.params.id;

  function getData() {}

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>yo</Text>
    </View>
  );
};

export default ProductOverView;
