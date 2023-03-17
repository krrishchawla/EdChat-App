import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image 
            style={styles.headerimage} 
            source={require('../assets/logo.png')}
            resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor : '#f0f0f0',
        width : "100%",
        padding: 10,
        borderBottomWidth : 0.1,
    },
    headerimage: {
        width: 200,
        height: 50,
        marginTop: 0, 
    },
});

export default Header;