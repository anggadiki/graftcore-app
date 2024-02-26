import { Image } from "react-native";
import { Text, View } from "../Themed";
import Button from "../Atoms/Buttton";

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
        style={{ marginTop: 200 }}
        alt="logo"
      />
      <Image
        source={require("../../assets/images/gambar.png")}
        alt="home"
        style={{ marginTop: 80, marginBottom: 80 }}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          gap: 20,
        }}
      >
        <Button title="Log In" />
        <Button title="Sign Up" />
      </View>
    </View>
  );
};

export default HomeScreen;
