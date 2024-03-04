import { Image } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";

const SuccessResetPasswordScreen = () => {
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
        backgroundColor: "White",
        margin: 24,
      }}
    >
      <Image
        source={require("../../assets/images/success.png")}
        style={{ width: 160, height: 160, marginTop: 87 }}
      />
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 80,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Password Reset Successful
        </Text>
      </View>
      <Text
        style={{
          color: "#392E32",
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
      >
        You have successfully reset your password
      </Text>
      <View style={{ marginTop: 40, backgroundColor: "white", width: "100%" }}>
        <Button>
          <Link href="/auth/(log in)/logIn">Okay</Link>
        </Button>
      </View>
    </View>
  );
};

export default SuccessResetPasswordScreen;
