import { Image, StyleSheet } from "react-native";
import { View } from "../Themed";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        alt="logo"
      />
      <Image
        source={require("../../assets/images/gambar.png")}
        style={styles.image}
        alt="home"
      />
      <View style={styles.buttonContainer}>
        <Button>
          <Link href="/auth/(log in)/logIn">Log In</Link>
        </Button>
        <Button>
          <Link href="/auth/(sign up)/signUp">Sign Up</Link>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    marginTop: 200,
    width: 172,
    height: 37,
  },
  image: {
    marginTop: 72,
    marginBottom: 63,
    width: 241,
    height: 195,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 30,
    gap: 24,
  },
});

export default HomeScreen;
