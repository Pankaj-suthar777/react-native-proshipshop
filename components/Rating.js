import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Rating = ({value, text, size, style}) => {
  return (
    <View style={[styles.rating, style]}>
      <View style={styles.ratingInner}>
        {value >= 1 ? (
          <Icon name="star" size={size} color="#7BC17E" />
        ) : value >= 0.5 ? (
          <Icon name="star-half-empty" size={size} color="#7BC17E" />
        ) : (
          <Icon name="star-o" size={size} color="#7BC17E" />
        )}
      </View>
      <View style={styles.ratingInner}>
        {value >= 2 ? (
          <Icon name="star" size={size} color="#7BC17E" />
        ) : value >= 1.5 ? (
          <Icon name="star-half-empty" size={size} color="#7BC17E" />
        ) : (
          <Icon name="star-o" size={size} color="#7BC17E" />
        )}
      </View>
      <View style={styles.ratingInner}>
        {value >= 3 ? (
          <Icon name="star" size={size} color="#7BC17E" />
        ) : value >= 2.5 ? (
          <Icon name="star-half-empty" size={size} color="#7BC17E" />
        ) : (
          <Icon name="star-o" size={size} color="#7BC17E" />
        )}
      </View>
      <View style={styles.ratingInner}>
        {value >= 4 ? (
          <Icon name="star" size={size} color="#7BC17E" />
        ) : value >= 3.5 ? (
          <Icon name="star-half-empty" size={size} color="#7BC17E" />
        ) : (
          <Icon name="star-o" size={size} color="#7BC17E" />
        )}
      </View>
      <View style={styles.ratingInner}>
        {value >= 5 ? (
          <Icon name="star" size={size} color="#7BC17E" />
        ) : value >= 4.5 ? (
          <Icon name="star-half-empty" size={size} color="#7BC17E" />
        ) : (
          <Icon name="star-o" size={size} color="#7BC17E" />
        )}
      </View>

      <Text style={styles.ratingText}>{text && text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingText: {
    fontSize: 18,
    fontWeight: 600,
    paddingLeft: 12,
  },
  review: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 15,
  },
});

export default Rating;
