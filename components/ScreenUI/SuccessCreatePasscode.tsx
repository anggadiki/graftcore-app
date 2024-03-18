import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { Image } from "react-native";
import Button from "../Atoms/Buttton";
import { Link, router } from "expo-router";

const SuccesCreatePasscodeScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
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
      <Image
        source={require("../../assets/images/lock.png")}
        style={{ width: 50, height: 50, marginTop: 57 }}
      />
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 18,
          marginTop: 32,
        }}
      >
        Your Passcode is set
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_400Regular",
          textAlign: "center",
          fontSize: 16,
          marginTop: 4,
        }}
      >
        You can now access your account, with your passcode.
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: 64,
          backgroundColor: "white",
        }}
      >
        <Button
          title="Continue"
          onPress={() => router.push("/(tabs)/")}
        ></Button>
      </View>
    </View>
  );
};

export default SuccesCreatePasscodeScreen;
