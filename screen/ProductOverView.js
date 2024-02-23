import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GetProductById} from '../api/products';
import ProductOverViewComponent from '../components/ProductOverviewComponent';
import Loading from '../components/ui/Loading';

const ProductOverView = ({route}) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [product, setProduct] = useState('');
  const id = route.params.id;

  async function getData() {
    setIsSubmiting(true);
    const res = await GetProductById(id);
    setIsSubmiting(false);
    console.log('ffff', res);
    setProduct(res);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isSubmiting) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <ProductOverViewComponent product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

export default ProductOverView;
