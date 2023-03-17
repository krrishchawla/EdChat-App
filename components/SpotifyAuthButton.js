import {View, Pressable, Text, StyleSheet} from "react-native"
import { Themes } from "../assets/Themes";

const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
      <View style={styles.container}>
        <Pressable style={styles.authbutton} onPress={authenticationFunction}>
            <Text style={styles.authtext}>Connect with Spotify!</Text>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    authbutton: {
      backgroundColor: Themes.colors.spotify,
      borderRadius: 100,
      padding: 15,
  
    },
    authtext: {
      color: "white",
      fontSize: 20,
    },
  });

export default SpotifyAuthButton;