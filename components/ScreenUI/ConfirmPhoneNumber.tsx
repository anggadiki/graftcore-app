import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";
import { Link, router } from "expo-router";

const ConfirmPhoneNumberScreen = () => {
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
      <View style={{ width: "100%", backgroundColor: "white" }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            marginTop: 24,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 18,
            }}
          >
            Confirm Your Phone Number
          </Text>
          <Text
            style={{
              color: "#392E32",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
            }}
          >
            We’ll send a code to the phone number you provided to confirm you
            own it.
          </Text>
        </View>
        <View
          style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 24,
            }}
          >
            (234) 08106454127
          </Text>
        </View>
        <View
          style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
            }}
          >
            Verification code
          </Text>
          <TextInput
            inputMode="numeric"
            placeholder="************"
            secureTextEntry={true}
            textContentType="password"
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
        <Text
          style={{
            color: "#9380B0",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 16,
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Resend Code
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 63,
        }}
      >
        <Button
          title="Next"
          onPress={() => router.push("/auth/(account setup)/addAddress")}
        ></Button>
      </View>
    </View>
  );
};

export default ConfirmPhoneNumberScreen;
