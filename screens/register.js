import React , {useState, useEffect} from "react";
import {Text , View, StyleSheet} from 'react-native';
import { ProgressBar, Colors , TextInput} from "react-native-paper";

const ProgressBarExample = () => {

    // install -> npm install react-native-paper

 const [status, setStatus] = useState() ;
 const [progressColor , setProgessColor] = useState(Colors.red400)
 const [name , setName] = useState('');
 const [age , setAge] = useState('');
 const [occ, setOcc] = useState('');
 const [location , setLocation] = useState('');

 useEffect(() => {
  if(status === 1)
  setProgessColor(Colors.green500)
 })

 return(
 <View style={styles.container}>
  <Text style={{paddingBottom:20}}>Progress Bar</Text>
  <ProgressBar progress={status} color={progressColor} />

  <View style={styles.text}>
   <Text style={{fontSize :30}}>Fill the details below</Text>
  </View>

  <View style={styles.textInput}>
   <TextInput mode="outlined" label="Name" value={name}
      onChangeText={(text)=> {
      setName(text) ;
   }} onEndEditing ={() => setStatus(0.25)}/>
   <TextInput mode="outlined" label="Age" value={age}
      onChangeText={(age)=>{
      setAge(age);
   }} onEndEditing ={() => setStatus(0.5)}/>
   <TextInput mode="outlined" label="Occupation" value={occ}
      onChangeText={(occupation)=>{
      setOcc(occupation);
   }} onEndEditing ={() => setStatus(0.75)}/>
   <TextInput mode="outlined" label="Location" value={location}
      onChangeText={(loc)=>{
      setLocation(loc);  
   }} onEndEditing ={() => setStatus(1)}/>
  </View>
 </View>

 )
}

export default ProgressBarExample ;

const styles = StyleSheet.create({
 container :{
  padding: 20
 },
 text :{
 marginTop:30
 },
 textInput:{
  marginTop : 60
 }
})
