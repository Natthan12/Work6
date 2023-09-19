import react from "react";
import { View,Text,StyleSheet, Alert, Button} from "react-native";

export default function ButtonStateDemo(){

    const t ='จำนวนครั้งที่คลิก : '
    let [count,setCount] = react.useState(0) //กำหนดตัวแปลให้แสดงผล
    let [text,setText] = react.useState(t+count)

    const onPressButton1 = () =>{
        const result = count+1 //สร้างตัวแปรชื่อ result เพื่อเก้บค่าที่เพิ่ม +1
        setCount(result)
        setText(t+result)
    }
    const onPressButton2 = () =>{
        const result = 0 //สร้างตัวแปรชื่อ result เพื่อเก้บค่าที่เพิ่ม +1
        setCount(result)
        setText(t+result)
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.item}>
            <Button title="Click Here" color="purple" onPress={ onPressButton1 }/>
            <Button title="Reset" color="purple" onPress={ onPressButton2 }/>
            </View> 

            <View>
                <Text style={{fontSize:20}}>{text}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop: 50,
        alignItems: 'center'
    },
    item:{
        width:200,
        marginBottom:15
    }
})