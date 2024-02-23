import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <Card style={styles.outerContainer}>
      <Card.Content style={styles.content}>
        <Text variant="titleLarge">{product.name}</Text>
      </Card.Content>
      <View style={styles.container}>
        <Card.Cover
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=0&k=20&c=2h5Q46wh-eRyPwh4KKnJhCKFWqcd2ltgv9tdaULDdbc=',
          }}
        />
      </View>
      <Card.Content style={styles.content}>
        <Text variant="headlineSmall">${product.price}</Text>
        <Text style={styles.conatinerRating} variant="bodyMedium">
          <Rating size={22} value={product.rating} />
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 12,
    height: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  content: {
    marginVertical: 6,
  },
  outerContainer: {
    margin: 12,
  },
  conatinerRating: {
    paddingTop: 10,
  },
});

export default Product;
