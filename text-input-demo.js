import react from "react";
import { View,Text,StyleSheet, Alert, Button, TextInput} from "react-native";

export default function TextInputDemo(){

    let [inputName, setInputName] = react.useState('') //('')ค่าเริ่มต้นเป็นค่าว่าง
    let [inputEmail, setInputEmail] = react.useState('')
    let [inputPassword, setInputPassword] = react.useState('')
    let [inputMemo, setInputMemo] = react.useState('')

    const onPressButton1 = () =>{

    }

    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>Name</Text>
                <TextInput style={styles.textInput} defaultValue={inputName} //defaultValue ค่าที่นำไปใช้
                onChange={event => setInputName(event.nativeEvent.text)} //กรณีมีการเปลี่ยนข้อมูล
                
                />    
            </View>
            <View style={styles.item}>
                <Text>Email</Text>
                <TextInput style={styles.textInput} defaultValue={inputEmail} //defaultValue ค่าที่นำไปใช้
                onChangeText={text => setInputEmail(text)}
                keyboardType='email-address' //number-pad,secureTextEntry คือ (password)
                />    
            </View>
            <View style={styles.item}>
                <Text>Password</Text>
                <TextInput style={styles.textInput} defaultValue={inputPassword} //defaultValue ค่าที่นำไปใช้
                onChangeText={text => setInputPassword(text)}
                secureTextEntry={true} //number-pad,secureTextEntry คือ (password)
                />    
            </View>
            <View style={styles.item}>
                <Text>Memo</Text>
                <TextInput style={[styles.textInput, {height:64}]} defaultValue={inputMemo}
                onChangeText={text => setInputMemo(text)}
                mutiline={true} //พิมได้หลายบรรทัด
                numberOfLine={3} // ได้ไม่เกิน 3 บรรทัด
                textAlignVertical='top'
                />    
            </View>
           
           <View style={styles.item}>
                <Button title="ตรวจสอบข้อมูล" color="purple" onPress={ onPressButton1 }/>
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
