import react from "react";
import { View,Text,StyleSheet, Alert, Button, TextInput} from "react-native";

export default function CalDemo3(){

    let [inputNum1, setInputNum1] = react.useState(0) //('')ค่าเริ่มต้นเป็นค่าว่าง
    let [result, setResult] = react.useState(0)

    const onPressButton1 = () =>{
        let num=parseInt(inputNum1)
        let msg=''
        let cal=num%2
        if (cal===0){
            msg ='เลขคู่'
          }else{
            msg ='เลขคี่'
        } 

        setResult(msg)


    }

    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>โปรแกรมตรวจสอบเลขคู่เลขคี่</Text>
                <TextInput style={styles.textInput} defaultValue={inputNum1} //defaultValue ค่าที่นำไปใช้
                onChange={event => setInputNum1(event.nativeEvent.text)} //กรณีมีการเปลี่ยนข้อมูล
                keyboardType='number-pad'
                
                />    
            </View>
            <View>
                <Text>ผลลัพธ์ : {result}</Text>
                
            </View>  

           <View style={styles.item}>
                <Button title="คำนวณ" color="purple" onPress={ onPressButton1 }/>
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
        marginBottom:15
    },
    textInput:{ 
        hight:32,//ด้านนอก สีด้านนอก
        width:320,
        borderWidth:1,
        borderColor:'blue',
        color:'Black',
        backgroundColor:'#fff',
        marginTop:5,
        paddingTop:3,
        paddingButtom:3

    }
})
