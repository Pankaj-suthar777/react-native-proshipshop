import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Text} from 'react-native-paper';
import Rating from './Rating';
import {useNavigation} from '@react-navigation/native';

const Product = ({product}) => {
  const navigation = useNavigation();
  const id = product._id;

  function pressHandler() {
    navigation.navigate('Product', {id});
  }

  return (
    <Card style={styles.outerContainer}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={pressHandler}>
        <View style={styles.cardItem}>
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
            <Divider style={{marginBottom: 12}} />
            <View style={styles.priceReviewContainer}>
              <View>
                <Text variant="headlineSmall">${product.price}</Text>
              </View>
              <View>
                <Text style={styles.conatinerRating} variant="bodyMedium">
                  <Rating color="#7BC17E" size={22} value={product.rating} />
                </Text>
              </View>
            </View>
          </Card.Content>
        </View>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  priceReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardItem: {
    borderRadius: 16,
  },
  pressed: {
    opacity: 0.85,
  },
  container: {
    marginVertical: 8,
    padding: 6,
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
    padding: 6,
    margin: 12,
    backgroundColor: 'white',
  },
});

export default Product;
