import React from 'react'
import {View, StyleSheet, Image} from 'react-native'


export default function ImageDemo(){
    const imgSrc = require('./capy2.jpg')
    

    return(
        <View style={styles.container}>
            <Image source={require(imgSrc)} style={styles.img}/>
            <Image source={require('./assets/capy2.jpg')} style={styles.img}/>
            <Image source={require('./assets/image/capy3.jpg')} style={styles.img}/> //require คือภาพในเครื่อง
            <Image source={{uri:'https://s3.amazonaws.com/ntbrand-wp/impressivenature/wp-content/uploads/2018/05/09125706/IN_Baby_Seals_5ad4f5b0a675089c1cc73ca0.jpeg'}} 
            resizeMode={'stretch'} style={styles.img}/>


        </View>


    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop: 50,
        alignItem: 'center'
    },
    img:{
        width: 200,
        height: 150,
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 5
    
    }
})

//แสดงแนวนอน
/*const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row', //row column
        flexWrap: 'warp',
        justifyContent:'space-event',
        marginTop: 50,
        alignItem: 'center'
    },
    img:{
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 5
    
    }
})*/