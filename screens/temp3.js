const [cartItems, changeCartItems] = useState(0);
    AsyncStorage.getItem("CART", (err, res) => {
        if (!res) changeCartItems([]);
        else changeCartItems(JSON.parse(res));
    }); 

    const renderItem = ({item}) => {
        
        return (
            <Card 
                itemData={item}
                onPress={()=>navigation.goBack}
            />
        );
    };

    return (
        <View>
            {cartItems.length <= 0?
                <Text>AB</Text>
                :
                <View style={styles.container}>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            } 
        </View>
    );