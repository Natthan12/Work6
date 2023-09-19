import react from "react";
import { View,Text,TouchableOpacity,FlatList, StyleSheet,Image,Alert} from "react-native";

export default function FlatListDemo(){
  const listData = [ //ตัว Data
    {name: 'iphone15', price:48900, img:'iphone15.png'},
    {name: 'ipad', price:25900, img:'ipad.png'},
    {name: 'iwatch', price:35900, img:'iwatch.png'},
    {name: 'ipad air', price:39900, img:'ipad-air.png'}
  ]
  const onPressItem = (item) => {
      let name = item.name

      Alert.alert(`${name} ราคา ${item.price} บาท`)
  }

  const renderFlatListItem = (listData) =>{ //ตัวเร็นเดอร์
    return(
      <TouchableOpacity onPress={() => onPressItem(listData.item)}>
        <View key={listData.item.name} style={styles.flatListItem}>
          <Image source={require('./iphone15.png')} style={styles.img}/>
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
            numColumns={2}
            
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
      paddingBottom: 50,
      alignItems:'center'

    },
    flatListItem:{
      width: 150,
      flexDirection:'column',
      justifyContent:'space-between',
      backgroundColor:'pink',
      marginBottom: 8,
      padding: 10,
      margin: 10,
      alignItems:'center',
      borderRadius: 10

    },
    itemName:{
      fontSize: 18,
      fontWeight:'bold'


    },
    itemPrice:{
      fontSize: 16,
      color: 'purple'


    },
    img:{
      width:100,
      height:100,
      marginRight:10
  
    }
    
})