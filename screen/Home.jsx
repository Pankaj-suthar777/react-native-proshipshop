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
    // <View style={styles.container}>
    //   {products.map(product => (
    //     <Product product={product} />
    //   ))}
    // </View>

    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Product product={item} />}></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Home;
