import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
//import {
//    DrawerContentScrollView,
//    DrawerItem
//} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

const DrawerContent = ({navigation}) => {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <Text style={styles.title}>Nam</Text>
                      <Text style={styles.caption}>Sinh viên UET</Text>                           
                    </View>
                    <View style={styles.listButton}>
                      <TouchableOpacity onPress={() => {}} style={styles.button}>
                          <Text style={styles.buttonText}>Profile</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}} style={styles.button}>
                          <Text style={styles.buttonText}>Lịch sử đặt hàng</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}} style={styles.button}>
                          <Text style={styles.buttonText}>Nhà hàng yêu thích</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}} style={styles.button}>
                          <Text style={styles.buttonText}>Quản lý thanh toán</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}} style={styles.button}>
                          <Text style={styles.buttonText}>Ví Coupon</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => signOut()} style={styles.button}>
                          <Text style={styles.buttonText}>Đăng xuất</Text>
                      </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}

/*<TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>*/

const styles = StyleSheet.create({
    drawerContent: {
      flex: 10,
      backgroundColor: '#ffe6d7',
      //alignItems: 'center',
    },
    userInfoSection: {
      //marginLeft:15
      backgroundColor: '#fda656',
      paddingLeft: 20,
      paddingTop: 10,
      marginBottom: 15,
      flex: 3,
      //alignSelf: 'center',
    },
    title: {
      fontSize: 40,
      //marginTop: 3,
      fontWeight: 'bold',
      color: '#fffaf0',
    },
    caption: {
      fontSize: 24,
      color: '#f8f8ff',
      //lineHeight: 14,
    },
    listButton: {
      flex: 10,
      paddingBottom: 150,
    },
    button: {
      backgroundColor: '#fffaf0',
      marginBottom: 2,
      marginTop: 2,
      flex: 1,
      paddingLeft: 25,
      flexDirection: 'row',
    },
    buttonText: {
      fontSize: 17,
      textAlignVertical: 'center',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent;