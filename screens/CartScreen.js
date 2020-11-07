import React,{useState} from 'react';
import { View, Text, Button, FlatList, StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import CardFoodInCart from '../components/CardFoodInCart';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = ({navigation}) => {

    const [cartItems, changeCartItems] = useState([]);
    const [sumOfCost, setSumCost] = useState(0);

    AsyncStorage.getItem("CART", (err, res) => {
        if (!res) changeCartItems([]);
        else {
            changeCartItems(JSON.parse(res));
        }

        let temp = 0;
        if (cartItems.length > 0) 
            for (let userObject of cartItems) {
                temp = temp + userObject.foodCost * userObject.quantity;
            }

        if (sumOfCost !== temp) setSumCost(temp);
    }); 

    const removeItem = ({itemToRemove}) => {
        
        //console.log(sumOfCost);

        let items = [];
        cartItems.map((item) => {
          if(JSON.stringify(item) !== JSON.stringify(itemToRemove) )
            items.push(item);
        });
        
        changeCartItems({cartItems : items});
        AsyncStorage.setItem("CART",JSON.stringify(items));
        
        //setSumCost(sumOfCost - itemToRemove.foodCost * itemToRemove.quantity);
        let temp = 0;
        if (cartItems.length > 0) 
            for (let userObject of cartItems) {
                temp = temp + userObject.foodCost * userObject.quantity;
            }

        if (sumOfCost !== temp) setSumCost(temp);
    };

    const renderItem = ({item}) => {
        return (
            <CardFoodInCart 
                itemData={item}
                onPress={()=>{console.log(item); removeItem({itemToRemove: item})}}
            />
        );
    };

    if (cartItems.length <= 0){
        return(
            <View style={{paddingTop: 200}}>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={{alignSelf:'center', fontSize: 30}}>Giỏ hàng bạn trống</Text>
                    <Text style={{alignSelf:'center', fontSize: 20}}>Hãy đặt món gì đó và ăn thôi</Text>
                </View>

                <TouchableOpacity style = {styles.BackButton}
                onPress = {() => navigation.goBack()}>
                    <Text style={{alignSelf:'center', fontSize: 25, color: '#f8f8ff'}}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else{ 
        return (        
            <View style={styles.container}>
                <View style={{flexDirection: 'row', height: 130, paddingTop: 10, backgroundColor: '#ffe6d7'}}>
                    <View style={{flexDirection: 'column', flex: 6}}>
                        <Text style={{fontSize: 20, marginLeft: 10}}>Giao hàng đến</Text>
                        <Text numberOfLines={2} style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10, }}>Đại học công nghệ, đại học quốc gia Hà nội</Text>
                        <Text style={{fontSize: 15, marginLeft: 10}}>Phí giao hàng: 15.000đ</Text>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'center', flex: 1}}>
                        <Icon
                            name="edit"
                            size={25}
                            color={'#5d5d5d'}
                            backgroundColor={'#f5f5f5'}  
                        />
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style = {{paddingLeft: 10, paddingRight: 10}}
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={{flexDirection: 'row', paddingBottom: 20, paddingTop: 10, backgroundColor: '#ffe6d7'}}>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={{fontSize: 17}}>Tổng cộng:</Text>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}> {sumOfCost + 15000}đ</Text>
                    </View>
                    
                    <TouchableOpacity style = {styles.PayButton}
                    onPress = {() => navigation.navigate('ShippingScreen')}>
                        <Text style={{alignSelf:'center', fontSize: 25, color: '#f8f8ff'}}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    alignSelf: 'center'
  },
  BackButton: {
    borderRadius:10,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor:'#fa8072',
        height: 40,
        width: '80%',
        justifyContent:'space-around',
  },
  PayButton: {
    borderRadius:10,
        alignSelf: 'center',
        //marginBottom: 20,
        //marginTop: 10,
        marginLeft: 20,
        backgroundColor:'#fa8072',
        height: 40,
        width: '60%',
        justifyContent:'space-around',
  }
});
