import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

//import StarRating from './StarRating';

const CardFood = ({itemData, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          
          <Text numberOfLines={3} style={styles.cardDetails}>{itemData.description}</Text>

          <Text style={styles.cardCost}>Giá: {itemData.cost} đồng</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFood;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardCost: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
