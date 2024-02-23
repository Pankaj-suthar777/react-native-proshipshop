import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Chip, Divider, Text, TextInput} from 'react-native-paper';
import Rating from './Rating';
import SelectableTextInput from './ui/SelectedInputComponent';
import ReviewComponent from './ReviewComponent';

const ProductOverViewComponent = ({product}) => {
  return (
    <ScrollView style={styles.container}>
      <Card mode={false}>
        <Card.Content style={styles.contentConatiner}>
          <Text variant="titleLarge">{product.name}</Text>
        </Card.Content>
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
          {/* <Text variant="titleLarge">{product.name}</Text> */}
          {/* <Divider style={styles.divider} /> */}
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
        <Chip
          style={styles.status}
          icon="information"
          onPress={() => console.log('Pressed')}>
          Status : {product.countInStock > 0 ? 'In Stock' : 'Not In Stock'}
        </Chip>
        <Divider style={styles.divider} />
        <View style={styles.checkoutContainerInner}>
          {/* <Text variant="bodyLarge">Qty : {product.countInStock}</Text> */}
          <Chip style={styles.status} onPress={() => console.log('Pressed')}>
            Quantity : {product.countInStock}
          </Chip>
          <SelectableTextInput qty={product.countInStock} />
        </View>
        <Divider style={styles.divider} />
        <Button
          icon="cart"
          mode="contained"
          style={styles.btn}
          onPress={() => console.log('Pressed')}>
          Add to cart
        </Button>
      </View>
      <View>
        <ReviewComponent reviews={product.reviews} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  checkoutContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentConatiner: {
    marginVertical: 24,
  },
  container: {
    flex: 1,
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
    //marginBottom: 70,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 14,
  },
  btn: {
    width: 180,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    height: 50,
    justifyContent: 'center',
  },
});

export default ProductOverViewComponent;
