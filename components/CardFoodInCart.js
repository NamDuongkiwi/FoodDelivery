import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

//import StarRating from './StarRating';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardFoodInCart = ({itemData, onPress}) => {
  return (
    //<TouchableOpacity onPress={onPress}>
    <View>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.foodImage}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.foodName}</Text>
          <Text style={styles.cardDetails}>Số lượng: {itemData.quantity}</Text>
          <Text style={styles.cardDetails}>Giá: {itemData.foodCost * itemData.quantity}</Text>
        </View>

        {/* <Icon.Button
          name="remove"
          size={25}
          color={'#5d5d5d'}
          backgroundColor={'#f5f5f5'}
          onPress={() => {onPress}}
        /> */}
        <TouchableOpacity style={{alignSelf: 'center', marginLeft: 10}}
        onPress={onPress}>
          <Icon
            name="remove"
            size={25}
            color={'#5d5d5d'}
            backgroundColor={'#f5f5f5'}  
          />
        </TouchableOpacity>
      </View>
    </View>
    //</TouchableOpacity>
  );
};

export default CardFoodInCart;

const styles = StyleSheet.create({
  card: {
    height: 80,
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
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
