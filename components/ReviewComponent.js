import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Chip, Divider, Text, TextInput} from 'react-native-paper';
import Rating from './Rating';
import ReviewModel from './ReviewModel';

const ReviewComponent = ({reviews}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.reviewHeadline}>
          <Text style={styles.text} variant="headlineMedium">
            Write a review
          </Text>
        </View>
        <View style={{width: '100%', marginVertical: 16}}>
          <Button icon="pen" mode="outlined" onPress={() => setVisible(true)}>
            Write a review
          </Button>
        </View>

        <View style={{marginVertical: 8}}>
          <Text variant="bodyLarge">Reviews</Text>
        </View>

        <View style={styles.reviewOuterConatainer}>
          {reviews?.map(review => (
            <View style={styles.reviewConatainer}>
              <Text style={{fontSize: 20, marginBottom: 10}}>
                {review.name}
              </Text>
              <Rating size={18} color="#efeaff" value={review.rating} />
              <Text style={{marginTop: 10}} variant="bodyLarge">
                {review.comment}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <ReviewModel visible={visible} setVisible={setVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  reviewHeadline: {
    backgroundColor: '#d6c8fd',
    width: '100%',
    padding: 12,
    marginBottom: 16,
    borderRadius: 16,
  },
  container: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
  text: {
    marginVertical: 12,
  },
  reviewConatainer: {
    width: '100%',
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#b8a2f3',
  },
  reviewOuterConatainer: {
    marginTop: 20,
    gap: 8,
    width: '100%',
  },
});

export default ReviewComponent;
