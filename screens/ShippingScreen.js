import React,{useRef,useState} from 'react';
import { View, Text, Button, FlatList, StyleSheet, AsyncStorage, TouchableOpacity, Image, Dimensions, StatusBar} from 'react-native';
import CardInBill from '../components/CardInBill';
import HeaderImageScrollView, {
    TriggeringView,
  } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const ShippingScreen = ({navigation}) => {
    const navTitleView = useRef(null);

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

    const renderItem = ({item}) => {
        return (
            <CardInBill 
                itemData={item}
            />
        );
    };

    return (        
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <HeaderImageScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0}
                minOverlayOpacity={0}
                renderHeader={() => (
                <Image source={require('../assets/banners/Shipping.png')} style={styles.image} />
                )}
                /* renderForeground={() => (
                <View style={styles.titleContainer}>
                      <Text style={styles.imageTitle}>Hàng đang được giao</Text>
                </View>
                )} */
                /* renderFixedForeground={() => (
                <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                    <Text style={styles.navTitle}>Hàng đang được giao</Text>
                </Animatable.View>
                )} */
                >


                {/* <TriggeringView
                    style={styles.section}
                    onHide={() => navTitleView.current.fadeInUp()}
                    onDisplay={() => navTitleView.current.fadeOut(100)}
                    > */}
                
                    <Text style={{alignSelf: 'center',  fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Danh sách món ăn</Text>

                    <FlatList 
                        style = {{paddingLeft: 10, paddingRight: 10}}
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={{paddingBottom: 20, paddingTop: 20, backgroundColor: '#ffe6d7'}}>
                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                            <Text style={{flex: 4, fontSize: 17}}>Tạm tính:</Text>
                            <Text style={{flex: 2, fontSize: 20, fontWeight:'bold'}}> {sumOfCost}đ</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                            <Text style={{flex: 4, fontSize: 17}}>Phí giao hàng:</Text>
                            <Text style={{flex: 2, fontSize: 20, fontWeight:'bold'}}> 15.000đ</Text>
                        </View>
                    </View>

                    <View style={{paddingBottom: 20, paddingTop: 20,marginTop: 20, backgroundColor: '#ffe6d7'}}>
                        
                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                            <Text style={{flex: 4, fontSize: 17}}>Tổng cộng:</Text>
                            <Text style={{flex: 2, fontSize: 20, fontWeight:'bold'}}> {sumOfCost + 15000}đ</Text>
                        </View>
                    </View>

                    <View style={{paddingBottom: 20, paddingTop: 20,marginTop: 20, backgroundColor: '#ffe6d7'}}>
                        <View style={{flexDirection: 'row', paddingLeft: 10, margin: 2}}>
                            <Text style={{flex: 2, fontSize: 17}}>Mã đơn hàng:</Text>
                            <Text style={{flex: 4, fontSize: 17, fontWeight:'bold'}}>123456</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 10, margin: 2}}>
                            <Text style={{flex: 2, fontSize: 17}}>Tên:</Text>
                            <Text style={{flex: 4, fontSize: 17, fontWeight:'bold'}}>Nam</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 10, margin: 2}}>
                            <Text style={{flex: 2, fontSize: 17}}>SĐT:</Text>
                            <Text style={{flex: 4, fontSize: 17, fontWeight:'bold'}}>0123456789</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 10, margin: 2}}>
                            <Text style={{flex: 2, fontSize: 17}}>Địa chỉ:</Text>
                            <Text style={{flex: 4, fontSize: 17, fontWeight:'bold'}}>Đại học công nghệ, đại học quốc gia Hà nội</Text>
                        </View>
                    </View>  
                {/* </TriggeringView>  */}

            </HeaderImageScrollView>    

            <View style={{paddingTop: 10, backgroundColor: '#ffe6d7'}}>
                <TouchableOpacity style={styles.addFoodButton}
                    onPress={() => navigation.goBack()}>
                    <Text style={{color:'#f8f8ff', fontSize:20, alignSelf: 'center', alignItems:'center',}}>Quay lại</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )

};

export default ShippingScreen;

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
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
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    addFoodButton:{
        borderRadius:10,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor:'#fa8072',
        height: 40,
        width: '80%',
        justifyContent:'space-around',
        
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
});
