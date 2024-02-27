import { Image } from "react-native";
import { Text, View } from "../Themed";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ marginTop: 200, width: 172, height: 37 }}
        alt="logo"
      />
      <Image
        source={require("../../assets/images/gambar.png")}
        alt="home"
        style={{ marginTop: 72, marginBottom: 63, width: 241, height: 195 }}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          gap: 24,
          paddingHorizontal: 30,
        }}
      >
        <Button>Log In</Button>
        <Button>
          <Link href="/auth/(sign up)/signUp">Sign Up</Link>
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;
