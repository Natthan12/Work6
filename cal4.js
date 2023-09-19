import react from "react";
import { View,Text,StyleSheet, Alert, Button, TextInput} from "react-native";

export default function CalDemo2(){

    let [inputNum1, setInputNum1] = react.useState(0) //('')ค่าเริ่มต้นเป็นค่าว่าง
    let [inputNum2, setInputNum2] = react.useState(0)
    let [result, setResult] = react.useState(0)
    let [grade, setGrade] = react.useState(0)

    const onPressButton1 = () =>{
        let a=parseInt(inputNum1)
        let b=parseInt(inputNum2)
        let grade=''
        let s=a+b 
        if (s>=75){
            grade = 'Good'
          }
          else if (s>=50)
          {
            grade = 'Pass'
          }
          else if (s<=40)
          {
            grade = 'Fail'
          }
          else
          {
            grade = 'กรุณากรอกคะแนน'
          }

        setResult(s)
        setGrade(msg)
    
        


    }

    return(
    
        <View style={styles.container}>
            <View><Text>โปรแกรมตรวจสอบคะแนและแสดงเกรด</Text></View>
            <View style={styles.item}>
                <Text>รับค่าคะแนนสอบ</Text>
                <TextInput style={styles.textInput} defaultValue={inputNum1} //defaultValue ค่าที่นำไปใช้
                onChange={event => setInputNum1(event.nativeEvent.text)} //กรณีมีการเปลี่ยนข้อมูล
                keyboardType='number-pad'
                
                />    
            </View>
            <View style={styles.item}>
                <Text>รับค่าคะแนนงาน</Text>
                <TextInput style={styles.textInput} defaultValue={inputNum2} //defaultValue ค่าที่นำไปใช้
                onChange={event => setInputNum2(event.nativeEvent.text)} //กรณีมีการเปลี่ยนข้อมูล
                keyboardType='number-pad'

                />    
            </View>
            <View>
                <Text>ผลลัพธ์ : {setGrade}</Text>
                <Text>รวมคะแนน : {result}</Text>
                
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
