import react from "react";
import { View,Text, Image,TouchableOpacity, Alert, TouchableHighlight, StyleSheet } from "react-native";

export default function TouchableDemo(){
    return(
        <View style = {styles.container}>
            <TouchableOpacity activeOpacity={0.75}
            style={styles.items}
            onPress={()=>{Alert.alert('You click button opacity')}}
            >

                <Text style={styles.buttonText}>Opacity</Text>
            </TouchableOpacity>
            <TouchableHighlight underlayColor={'red'}
              style={styles.items}
              onPress={()=>{Alert.alert('You click button opacity')}}
              >
                <Text style={styles.buttonText}>Highlight</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'red'}
              style={styles.items}
              onPress={()=>{Alert.alert('You click button opacity')}}
              >

              <View style={styles.viewImgTextContainer}>
                <Image source={require('./home.png')} style={styles.img}/>
                <Text style={styles.buttonText}>Highlight</Text>
              </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop:50,
        alignItems:'center'

    },
    items:{
      width: 250,
      height: 45,
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor: 'royalblue',
      borderRadius: 15,


    },
    buttonText:{
      fontSize: 20,
      color: 'white'

    },
    img:{
      width:40,
      height:40,
      marginRight:10
  
    },
    viewImgTextContainer:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-evenly'


    }
    
})