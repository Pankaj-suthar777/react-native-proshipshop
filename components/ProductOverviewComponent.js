import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Text} from 'react-native-paper';
import Rating from './Rating';
import SelectableTextInput from './ui/SelectedInputComponent';

const ProductOverViewComponent = ({product}) => (
  <ScrollView style={styles.container}>
    <Card mode={false}>
      <View style={styles.imageContainer}>
        <Card.Cover
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=0&k=20&c=2h5Q46wh-eRyPwh4KKnJhCKFWqcd2ltgv9tdaULDdbc=',
          }}
        />
      </View>
      <Card.Content style={styles.contentConatiner}>
        <Text variant="titleLarge">{product.name}</Text>
        <Divider style={styles.divider} />
        <Text variant="headlineSmall">${product.price}</Text>
        <Divider style={styles.divider} />
        <View style={styles.ratingConatiner}>
          <Rating
            text={`${product.numReviews} reviews`}
            size={26}
            value={product.rating}
          />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.description} variant="bodyLarge">
          {product.description}
        </Text>
      </Card.Content>
    </Card>
    <View style={styles.checkoutContainer}>
      <Text style={styles.description} variant="bodyLarge">
        Status : {product.countInStock > 0 ? 'In Stock' : 'Not In Stock'}
      </Text>
      <Divider style={styles.divider} />
      <Text style={styles.description} variant="bodyLarge">
        Qty : {product.countInStock}
      </Text>
      <Divider style={styles.divider} />
      <SelectableTextInput qty={product.countInStock} />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  contentConatiner: {
    marginVertical: 24,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  imageContainer: {
    height: 250,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  ratingConatiner: {
    marginVertical: 12,
  },
  divider: {
    marginVertical: 16,
  },
  checkoutContainer: {
    marginBottom: 70,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 14,
  },
});

export default ProductOverViewComponent;
