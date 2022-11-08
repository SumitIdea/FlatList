import React,  { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert, Modal,Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: 'red',
    height: 44,
  },
});

const App = () => {
 
  const [modalVisible, setModalVisible] = useState(false);

  onClickfunc = (data) => {
    // Alert.alert("Alert",data.key)
    Alert.alert(
      "Alert Selection",
      "You have selected " + data.key,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") }
        { text: "OK", onPress: () => setModalVisible(!modalVisible) }
      ]
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item, index }) =>
        (
          <TouchableOpacity
            onPress={() =>
              onClickfunc(item)
            }
            style={{ margin: 5, borderRadius: 10, elevation: 5, flexDirection: 'row', shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>

            <Image
              style={{ height: 50, width: 50, alignSelf: 'center' }}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png' }} />

            <Text style={{ marginStart: 10, fontSize: 15, fontWeight: 'bold', alignSelf: 'center' }}>{index + 1 + ". "}</Text>

            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>{item.key}</Text>
            <Image
              style={{ height: 50, width: 50, alignSelf: 'center', position: 'absolute', right: 10 }}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

            <Modal visible={modalVisible}   transparent={true}>
              <View style={{flex:1,backgroundColor:'#fffff'}}>
              <View style={{margin:50, backgroundColor:'grey', flex:1, borderRadius:8,padding:40}}>
              <Text style={{fontSize:30, position: 'absolute',right:10,alignSelf:'center'}}
              onPress = {() => setModalVisible(!modalVisible)}>x</Text>
             <Image
              style={{ height: 150, width: 150, alignSelf: 'center' }}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png' }} />

      
              <Text style={{fontSize:40,marginTop:20, marginBottom:20}}>Modal Text  </Text>
                 <Button onPress = {() => setModalVisible(!modalVisible)} title = "Hide Modal"></Button>
                  </View>
                  </View>
                </Modal >
            </TouchableOpacity >
        )}
/>
    </SafeAreaView >
  );
}

export default App;