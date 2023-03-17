import { StyleSheet, FlatList, Dimensions, Text, Image, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from 'react';
import {supabase} from '../supabase.js'

const windowWidth = Dimensions.get('window').width;

const options = [
  { id: 1, label: 'math104', name: 'MATH 104' },
  { id: 2, label: 'cs107', name: 'CS 107' },
  { id: 3, label: 'cs231n', name: 'CS 231N' },
];


function pushDataToTable(name, text, className) {
  return supabase.from('main').insert([{ name, text, class_name: className }]);
}


export default function Posts({ navigation }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [className, setClassName] = React.useState('');
  const [myclass, setClass] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (myclass) => {
    setClass(myclass);
    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().startsWith(myclass.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setClassName(myclass)
  };

  const handleOptionPress = (option) => {
    setClassName(option.label);
    setClass(option.label);
    setFilteredOptions([]);
  };

  async function handleSubmit() {
    const { error } = await pushDataToTable(name, text, className);
    if (error) {
      console.error(error);
    } else {
      console.log('Data inserted successfully');
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.cancelView}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View> 
      <View style={styles.header}>
        <Text style={{ fontSize: 30, color: 'black' }}>Create a post</Text>
      </View>

        <View style={styles.enterTitle}>
          <Text style={{ fontSize: 20, color: 'black' }}>Enter your title</Text>
          <TextInput
            style={styles.titleTextBox}
            placeholder="  Anonymous"
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>

        <View style={styles.enterTitle}>
          <Text style={{ fontSize: 20, color: 'black' }}>Enter your class</Text>
          {/* <TextInput
            style={styles.titleTextBox}
            placeholder="  Anonymous"
            onChangeText={(className) => setClassName(className)}
            value={className}
          /> */}
     
     
      <TextInput
        value={myclass}
        style={styles.titleTextBox}
        placeholder="  Class code"
        onChangeText={handleInputChange}
      />
      <FlatList
        data={filteredOptions}
        renderItem={({ item }) => (
          <Text onPress={() => handleOptionPress(item)}>{item.name}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />

  

        </View>

        <View style={styles.enterStatus}>
          <Text style={{ fontSize: 20, color: 'black' }}>Share what is on your mind</Text>
          <TextInput
            style={styles.statusTextBox}
            placeholder="  Enter here"
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>

        <TouchableOpacity style={styles.postButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>POST</Text>
        </TouchableOpacity>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'space-evenly',
    backgroundColor : "#fbfbfb",
  },
  titleTextBox: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EAEEFF',
    padding:10
  },
  statusTextBox: {
    width: '100%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EAEEFF',
    padding:10
  },
  enterTitle: {
    width: '75%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }, 
  enterStatus: {
    width: '75%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'red'
  }, 
  header: {
    //backgroundColor: 'blue'
    marginTop: 10
  },
  postButton: {
    backgroundColor: '#FFCC00',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius : 10,
    marginTop: 20
  },
  cancelView: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: windowWidth * 0.95,
    height: '7%',
    marginTop: '15%'
  },
  cancelButton: {
    backgroundColor: '#FFCC00',
    width: '25%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius : 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight : 'bold',
  }



 
});
