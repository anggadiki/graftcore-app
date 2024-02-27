import {
  useFonts,
  NotoSans_500Medium,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import BackHandler from "../Atoms/BackHandler";
import { Text, View } from "../Themed";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";

const ConfirmEmailScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
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
          justifyContent: "flex-start",
          backgroundColor: "white",
          marginTop: 24,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 18,
          }}
        >
          Confirm your email address
        </Text>
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
            paddingTop: 8,
          }}
        >
          We’ll send a code to your email address to confirm you own it.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 24,
          gap: 24,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 24,
          }}
        >
          JohnHendricks@gmail.com
        </Text>
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
              letterSpacing: 0.5,
            }}
          >
            Verification Code
          </Text>
          <TextInput
            placeholder="**********"
            secureTextEntry={true}
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
            backgroundColor: "white",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Text
            style={{
              color: "#9380B0",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 16,
            }}
          >
            Resend Code
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 16,
            }}
          >
            Open Email App
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexBasis: "35%",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button title="Confirm"></Button>
        </View>
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;
