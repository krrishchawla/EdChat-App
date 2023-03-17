import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Dimensions, Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import {supabase} from '../supabase.js'


const windowWidth = Dimensions.get('window').width;

const posts = [
    { key: '1', name: 'Jerrys Guinea Pig', votes: '532', text: "Jerry Cain Zindabad" },
    { key: '2', name: 'Anonymous', votes: '100', text: "I hate heap allocator"  },
    { key: '3', name: 'Victim of Binary Bomb', votes: '87', text: "Did anyone do secret level?"  },
  ];




function upVote(numVotes) {
    return supabase.from('main').insert([{ votes :  numVotes + 1}]);
}

function fetchDataByClassName(className) {
    return supabase
      .from('main')
      .select('*')
      .eq('class_name', className);
}

  const renderPost = ({ item }) => (
    <View style={styles.post}>
        <View style={{flex : 0.9, justifyContent : 'space-between'}}>
            <Text style={{fontSize : 12, fontWeight : 'bold', marginBottom : 10}}>{item.name}</Text>
            <Text style={{fontSize : 18}}>{item.text}</Text>
        </View>
        <View style={styles.votes}>
            <TouchableOpacity >
                <Image
                style={styles.arrow}
                source={require('../assets/vote.png')}
                />
            </TouchableOpacity>
            <Text style={{fontWeight : 'bold'}} >{item.votes}</Text>
            <TouchableOpacity>
                <Image
                style={styles.arrow}
                source={require('../assets/vote.png')}
                transform={[{ scaleY: -1 }]}
                />
            </TouchableOpacity>
        </View>
    </View>
  );


export default function Math104({navigation}) {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchFilteredData() {
      const { data, error } = await fetchDataByClassName('cs231n');
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    }
    fetchFilteredData();
  }, [data]);

  return (
    <View style={styles.container}>

    
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.headerView}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}>CS 231N</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate("PostsPage")}>+ Post</Text>
            </TouchableOpacity>
        </View>  
  
        <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        horizontal={false}
        contentContainerStyle={{justifyContent :"center", width : "100%"}}
        />
 
    </View>
    </SafeAreaView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  },
  body: {
    marginLeft : 30,
    marginRight : 30,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: windowWidth * 0.95,
    height: '7%',
    // backgroundColor : 'green',
  },
  button: {
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
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EBEEFE',
    marginTop : 15,
    padding : 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  votes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    height: 20,
    width: 20,
  },
});
