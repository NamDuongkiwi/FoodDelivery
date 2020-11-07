import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

//import axios from 'axios';

//import Config from 'react-native-config';

//import NavHeaderRight from '../components/NavHeaderRight';
//import ListCard from '../components/ListCard';

//const BASE_URL = Config.NGROK_HTTPS_URL;

const HomeScreen = ({navigation}) => {
  /*static navigationOptions = ({navigation}) => {
    return {
      title: 'Hungry?',
      headerRight: (
        <NavHeaderRight toScreen={'OrderSummary'} buttonText={'View Basket'} />
      ),
    };
  };*/
  //

  /*state = {
    foods: [],
    query: '',
  };
  //

  async componentDidMount() {
    try {
      const foods_response = await axios.get(`${BASE_URL}/foods`);

      this.setState({
        foods: foods_response.data.foods,
      });
    } catch (err) {
      console.log('err: ', err);
    }
  }

  onChangeQuery = text => {
    this.setState({
      query: text,
    });
  };
*/


/*

<View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              //onChangeText={this.onChangeQuery}
              //value={query}
              placeholder={'Ăn gì địt mẹ m?'}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.filterList()}
              title="Go"
              color="#c53c3c"
            />
          </View>
        </View>
*/
    //const {foods, query} = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.menuWrapper}>
          <View style={styles.timeToEat}>
            <Text style={styles.textTimeToEat}> TIME TO EAT </Text>
          </View>
          <View style={styles.menuIcon}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  color={'#5d5d5d'}
                  backgroundColor={'#f5f5f5'}
                  onPress={() => navigation.navigate('DrawerContent')}
                />
          </View>
        </View>

        <View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              //onChangeText={this.onChangeQuery}
              //value={query}
              textAlign={'center'}
              placeholder={'Ăn gì bạn êy?'}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() =>
                navigation.navigate('CardListScreen')//{}//navigation.navigate('CardListScreen', {title: 'Restaurant'})
              }>
              <View>
                <Text style={styles.textButton}>GO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView style={styles.container}>
        
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              //horizontal={false}
              height={200}
              activeDotColor="#FF6347">
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner1.jpg')}
                  //source={{uri: 'https://drive.google.com/drive/my-drive?fbclid=IwAR3bl-HecXLHyPFMz2qJCZdhgqQuBdtlHLDVufVDQm-EWaWYAqH8FJHnhSc'}}
                  resizeMode="cover"
                  style={styles.sliderImageBanner}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImageBanner}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner3.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImageBanner}
                />
              </View>
            </Swiper>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() =>
                navigation.navigate('CardListScreen')//{}//navigation.navigate('CardListScreen', {title: 'Restaurant'})
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon1.png')}
                  //source={{uri: 'https://i.imgur.com/r6Eogpe.jpg'}}
                  
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Cơm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() =>
                navigation.navigate('CardListScreen')//navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon2.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Bún/Phở/Mì</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.categoryBtn} 
              onPress={() => 
                navigation.navigate('CardListScreen')
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon3.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Tà tưa</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <TouchableOpacity 
              style={styles.categoryBtn} 
              onPress={() => 
                navigation.navigate('CardListScreen')
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon4.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Ăn vặt</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.categoryBtn} 
              onPress={() => 
                navigation.navigate('CardListScreen')
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon5.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Dau sạch</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.categoryBtn} 
              onPress={() => 
                navigation.navigate('CardListScreen')
              }>
              <View style={styles.categoryIcon}>
                <Image
                  source={require('../assets/Icon6.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Gà dán</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.cardsWrapper}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
              }}>
              Các quán ăn được ưa thích
            </Text>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../assets/banners/food-banner2.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Amazing Food Place</Text>
                
                <Text style={styles.cardDetails}>
                  Amazing description for this amazing place
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../assets/banners/food-banner3.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Amazing Food Place</Text>
                
                <Text style={styles.cardDetails}>
                  Amazing description for this amazing place
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../assets/banners/food-banner4.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Amazing Food Place</Text>
                
                <Text style={styles.cardDetails}>
                  Amazing description for this amazing place
                </Text>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  //

  /*filterList = async () => {
    const {query} = this.state;
    const foods_response = await axios.get(`${BASE_URL}/foods?query=${query}`);

    this.setState({
      foods: foods_response.data.foods,
      query: '',
    });
  };*/

  /*viewItem = item => {
    this.props.navigation.navigate('FoodDetails', {
      item,
    });
  };*/

  /*renderFood = ({item}) => {
    return <ListCard item={item} viewItem={this.viewItem} />;
  };*/
}
//

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    //paddingBottom: 10,
  },
  menuWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: '#fff080',
  },
  menuIcon: {
    flex: 2,
    //backgroundColor: '#fff080',
  },
  
  timeToEat: {
    flex: 12,
    alignSelf: 'center',
    //backgroundColor: '#fff080',
  },

  textTimeToEat: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    //backgroundColor: '#fff080',
  },
  
  topWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: '#fff080',
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 30,
    borderColor: '#dcdcdc',
    backgroundColor: '#dcdcdc',
    borderWidth: 1,
    //borderRadius: 8,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonWrapper: {
    //height: 100,
    flex: 1,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#ff7f50' /* '#FF6347' */,
    //borderRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  textButton: {
    alignSelf: 'center',
    color: '#ffffff',
  },
  list: {
    marginTop: 20,
  },
  ////////////////////////////////////////
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '70%',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  sliderImageBanner: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
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
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});

export default HomeScreen;