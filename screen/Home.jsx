import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {GetProduct} from '../api/products';
import Product from '../components/Product';

const Home = () => {
  const [products, setProducts] = useState([]);
  async function getData() {
    const res = await GetProduct();
    console.log(res);
    setProducts(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Product product={item} />}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  outerContainer: {
    marginBottom: 40,
    flex: 1,
  },
});

export default Home;
