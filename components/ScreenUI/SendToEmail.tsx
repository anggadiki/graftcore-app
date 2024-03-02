import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { Image } from "react-native";
import Button from "../Atoms/Buttton";

const SendToEmailScreen = () => {
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
        source={require("../../assets/images/send.png")}
        style={{ width: 55, height: 55, marginTop: 87 }}
      />
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 18,
          marginTop: 32,
        }}
      >
        Check your mail
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
          marginTop: 8,
        }}
      >
        We have sent instructions to reset your password to your email address.
      </Text>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}>
        <Button title="Open email app"></Button>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 13,
            marginBottom: 70,
            textAlign: "center",
          }}
        >
          Did not receive the email? check your spam filter
        </Text>
      </View>
    </View>
  );
};

export default SendToEmailScreen;
