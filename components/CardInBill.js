import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

//import StarRating from './StarRating';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardFoodInBill = ({itemData}) => {
    return (
        <View style={styles.card}>
            <View style={{alignSelf: 'center', flex: 1}}>
                <Text style={styles.cardDetails}>x{itemData.quantity}</Text>    
            </View>
            <View style={{alignSelf: 'center', flex: 8}}>
                <Text style={styles.cardTitle}>{itemData.foodName}</Text>
            </View>
            <View style={{alignSelf: 'center', flex: 3}}>
                <Text style={styles.cardDetails}>Giá: {itemData.foodCost * itemData.quantity}</Text>
            </View>
        </View>
  );
};

export default CardFoodInBill;

const styles = StyleSheet.create({
  card: {
    height: 50,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    borderColor: '#ccc',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#444',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
