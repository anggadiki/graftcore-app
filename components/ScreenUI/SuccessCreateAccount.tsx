import { Image } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
import { Link, router } from "expo-router";

const SuccessCreateAccountScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_600SemiBold,
    NotoSans_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        margin: 24,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 172, height: 37, backgroundColor: "white" }}
        />
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Image
          source={require("../../assets/images/logo_succes.png")}
          style={{ width: 193, height: 184, backgroundColor: "white" }}
        />
      </View>

      <Image
        source={require("../../assets/images/logo_succes.png")}
        style={{
          width: 72,
          height: 68,
          position: "relative",
          left: 31,
          bottom: 15,
        }}
      />
      <Text
        style={{
          marginTop: 32,
          color: "#120409",
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 20,
        }}
      >
        Welcome
      </Text>
      <Text
        style={{
          color: "#120409",
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
      >
        You’ve successfully created your account
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: 64,
        }}
      >
        <Button
          title="Continue"
          onPress={() => router.push("/auth/(log in)/logIn")}
        ></Button>
      </View>
    </View>
  );
};

export default SuccessCreateAccountScreen;
