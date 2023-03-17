import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, Dimensions, Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import {Layout} from '@ui-kitten/components';
import Header  from '../components/header';

const windowWidth = Dimensions.get('window').width;

const CLASSES = [
  { id: 1, name: "Applied Matrix Theory", code: "MATH 104" },
  { id: 2, name: "Deep Learning for Computer Vision", code: "CS 231N" },
  { id: 3, name: "Computer Organization and Systems", code: "CS 107" },
];

const renderItem = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(item.code)}>
  <View style={styles.MainBox}>
    <View style={styles.HeadBox}>
      <Text style={{color : 'white', fontSize : 20, fontWeight : "bold"}}>{item.code}</Text>
    </View>
    <View style={styles.TextBox}>
      <Text style={{color : '#000', fontSize : 20, fontWeight : "bold"}}>{item.name}</Text>
    </View>
  </View>
  </TouchableOpacity>
);


export default function HomeScreen( {navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.body}>
      <Text style={{color : '#000', fontSize : 20, fontWeight : "bold", marginBottom : 30}}>Your Courses</Text>
        <FlatList
        data={CLASSES}
        renderItem={({ item }) => renderItem({ item, navigation })}
        keyExtractor={(item) => item.id.toString()}
        // contentContainerStyle={{alignItems :"left", width : "100%",}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbfbfb',
  },
  header: {
    width : '100%',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop : 70,
    backgroundColor : '#f0f0f0'
  },
  body : {
    marginTop : 30,
    marginLeft : 30,
    marginRight : 30,
  },
  HeadBox : {
    backgroundColor : '#337aff',
    padding : 10,
  },
  MainBox : {
    marginBottom : 30,
    // marginRight : 30,
    width : windowWidth * 0.8,
    borderWidth : 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  TextBox : {
    backgroundColor : '#EBEEFE',
    padding : 20,
  }
});
