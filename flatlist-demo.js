import react from "react";
import { View,Text,TouchableOpacity,FlatList, StyleSheet, Alert} from "react-native";

export default function FlatListDemo(){
  const listData = [ //ตัว Data
    {name: 'iphone15', price:48900},
    {name: 'ipad', price:25900},
    {name: 'iwatch', price:35900},
    {name: 'ipad air', price:39900}
  ]
  
  const onPressItem = (item) => {
      let name = item.name
      //let price = item.price
      Alert.alert(`${name} ราคา ${item.price} บาท`)
    
    }
  const renderFlatListItem = (listData) =>{ //ตัวเร็นเดอร์
    return(
      <TouchableOpacity onPress={() => onPressItem(listData.item)}>
        <View key={listData.item.name} style={styles.flatListItem}>
          <Text style={styles.itemName}>{listData.item.name}</Text>
          <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
        </View>
      </TouchableOpacity>
    )
    

  }
    return(
        <View style={styles.container}>
            <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
            <FlatList data={listData} 
            renderItem={renderFlatListItem}
            keyExtractor={(item, index) => item+index}
            style={styles.flatList} //กรอบ
            contentContainerStyle={styles.flatListContent} //เนื้อหาด้านใน
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,

    },
    flatList:{
      marginTop: 10


    },
    flatListContent:{
      margin: 10,
      paddingBottom: 50
    },
    flatListItem:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'pink',
      marginBottom: 8,
      padding: 10

    },
    itemName:{
      fontSize: 18,
      fontWeight:'bold'


    },
    itemPrice:{
      fontSize: 16,
      color: 'purple'


    }
    
})