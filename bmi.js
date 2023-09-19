import react from "react";
import { View,Text,StyleSheet, Alert, Button, TextInput, Image} from "react-native";

export default function BMI(){

    let [inputW, setInputWeight] = react.useState(0)
    let [inputH, setInputHeight] = react.useState(0)
    let [result, setResult] = react.useState(0)
    let [bmi, setBmi] = react.useState(0)
    let [picture, setPicture] = react.useState(0)
  
    const onPressButton1 = () =>{
        let imageName=''
        let h =parseInt(inputH)
        let w =parseInt(inputW)
        let h1 = h/100
        let h2 = h1*h1
        let b = w / h2
        
        if (b >= 30){
            bmi = 'อ้วนระดับ 2'
            imageName = require('./B5.PNG')
          }
          else if (b <= 29.90 && b >= 25)
          {
            bmi = 'อ้วนระดับ 1'
            imageName = require('./B4.PNG')
          }
          else if (b <= 24.90 && b >= 23)
          {
            bmi = 'น้ำหนักเกิน'
            imageName = require('./B3.PNG')
          }
          else if (b <= 22.90 && b >= 18.5)
          {
            bmi = 'ปกติสมส่วน'
            imageName = require('./B2.PNG')
          }
          else if (b <= 18.5)
          {
            bmi = 'ต่ำกว่าเกณฑ์'
            imageName = require('./B1.PNG')
          }
          else
          {
            bmi = 'กรุณากรอกน้ำหนัก-ส่วนสูง'
          }

        setResult(bmi)
        setBmi(b.toFixed(2))
        setPicture(imageName)
    
        


    }

    return(
    
        <View style={styles.container}>
            <View><Text>BMI App</Text></View>
            <View style={styles.item}>
                <Text>ส่วนสูง</Text>
                <TextInput style={styles.textInput} defaultValue={inputH}
                onChange={event => setInputHeight(event.nativeEvent.text)}
                keyboardType='number-pad'
                
                />    
            </View>
            <View style={styles.item}>
                <Text>น้ำหนัก</Text>
                <TextInput style={styles.textInput} defaultValue={inputW} 
                onChange={event => setInputWeight(event.nativeEvent.text)}
                keyboardType='number-pad'

                />    
            </View>
            <View>
                <Text>BMI : {bmi}</Text>
                <Text>ผลลัพธ์ : {result}</Text>
                <Image source={picture} styles={styles.img}/>
               
                
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
        marginTop: 100,
        alignItems: 'center'
    },
    item:{
        marginBottom:20,
        marginBotton:15
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

    },
    img:{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 5
    
    }
})
