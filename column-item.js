import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function ColumnItem(){
    const items = ['One','Two','Three','Four','5']
    return(
        <View style = {styles.container}>
            {items.map((item, i) =>{
                return(
                    <View key={i} style = {styles.item}>
                        <Text style = {styles.text}>{item}</Text>
                    </View>
                )
            }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop: 50,
        padding: 10,
    },
    item:{
        height:60,
        backgroundColor: 'red',
        marginBottom: 15,
        paddingLeft : 10,
        justifyContent: "center",
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})