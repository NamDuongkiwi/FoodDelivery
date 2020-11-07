import React, {useRef,useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import AddFoodScreen from './AddFoodScreen';

import * as Animatable from 'react-native-animatable';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {dataFood} from '../model/dataFood';

import CardFood from '../components/CardFood';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

//const OrderDetailButton = ({navigation}) => {
  /* const value = AsyncStorage.getItem('CART');
  if (value === null) return null;
  else return ( 
    <View style={{paddingTop: 10}}>
      <TouchableOpacity style={styles.addFoodButton}
      onPress={() => {AsyncStorage.removeItem('CART');}}>
        <Text style={{color:'#f8f8ff', fontSize:20, alignSelf: 'center', alignItems:'center',}}>Đặt thôi</Text>
      </TouchableOpacity>
    </View>
  ) */
  /*const [isShow, changeIsShow] = useState(0);
  
  AsyncStorage.getItem("CART", (err, res) => {
    if (!res) changeIsShow(1);
    else changeIsShow(0);
  });
  
  if (isShow === 0)*/
  /* return ( 
    <View style={{paddingTop: 10}}>
      <TouchableOpacity style={styles.addFoodButton}
      onPress={() => navigation.navigate('CartScreen')}>
        <Text style={{color:'#f8f8ff', fontSize:20, alignSelf: 'center', alignItems:'center',}}>Đặt thôi</Text>
      </TouchableOpacity>
    </View>
  ) */
  //else return null;
//}

const CardItemDetails = ({route, navigation}) => {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  const renderItem = ({item}) => {
    return (
        <CardFood 
            itemData={item}
            onPress={()=> navigation.navigate('AddFoodScreen', {itemData: item})}
        />
    );
  };
  
  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Overview</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#FF6347" />
              <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>
        </TriggeringView>
        
        <View style={[styles.section, styles.sectionLarge]}>
          <Text style={styles.sectionContent}>{itemData.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.categories}>
            {itemData.categories.map((category, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{category}</Text>
              </View>
            ))}
          </View>
        </View>




        <View style={styles.containerListFood}>
          <FlatList 
              data={dataFood}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
        </View>




      </HeaderImageScrollView>
      
      {/* <OrderDetailButton/> */}
      
      <View style={{paddingTop: 10}}>
        <TouchableOpacity style={styles.addFoodButton}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text style={{color:'#f8f8ff', fontSize:20, alignSelf: 'center', alignItems:'center',}}>Giỏ hàng</Text>
        </TouchableOpacity>
      </View>
  
      
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  containerListFood: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
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
  sectionLarge: {
    minHeight: 300,
  },
  addFoodButton:{
    borderRadius:10,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor:'#fa8072',
    height: 40,
    width: '80%',
    justifyContent:'space-around',
    
},
});
