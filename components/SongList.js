import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import DawnFM from "./DawnFM";
import Header from "./header";

const SongList = ({tracks, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.songlist}>
            <FlatList 
            data={tracks}
            renderItem={({item, index}) => {
                return <DawnFM urls={item} navigation={navigation} title={item.songTitle} image={item.imageUrl} album={item.albumName} time={item.duration} idx={index} artist={(item.songArtists[0]).name}/>;
            }}
            keyExtractor={item => item.id}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 30,
        marginTop: 27,
        alignItems: "center",
    },
    headerimage: {
        width: 20,
        height: 20,
    },
    songlist: {
        marginTop : 20,
        flexDirection: "row",
    }
});

export default SongList;