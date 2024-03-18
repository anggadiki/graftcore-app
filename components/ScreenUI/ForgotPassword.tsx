import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import BackHandler from "../Atoms/BackHandler";
import { Text, View } from "../Themed";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";
import { Link, router } from "expo-router";

const ForgotPasswordScreen = () => {
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
      <BackHandler />
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 48,
          gap: 4,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 18,
          }}
        >
          Forget your Password?
        </Text>
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
        >
          Enter the email associated with your account and we’ll send an email
          with instructions to reset your password.
        </Text>
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}>
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
        >
          Email Address
        </Text>
        <TextInput
          inputMode="text"
          placeholder="Anggadiki@example.com"
          secureTextEntry={false}
          textContentType="emailAddress"
          style={{
            backgroundColor: "#ECECEC80",
            paddingVertical: 12.5,
            paddingHorizontal: 16,
            borderRadius: 8,
            fontSize: 16,
            fontFamily: "NotoSans_400Regular",
            borderColor: "#B0ABAD",
            borderWidth: 1,
          }}
        ></TextInput>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-end",
          backgroundColor: "white",
          marginBottom: 64,
        }}
      >
        <Button
          title="Send Instructions"
          onPress={() => router.push("/auth/(reset password)/sendToEmail")}
        ></Button>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
