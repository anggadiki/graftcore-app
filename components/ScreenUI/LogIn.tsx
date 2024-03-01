import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
  NotoSans_800ExtraBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { Image, TextInput } from "react-native";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";

const LogInScreeen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
    NotoSans_800ExtraBold,
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
        source={require("../../assets/images/logo.png")}
        style={{ width: 172, height: 37, marginTop: 70 }}
      />
      <Text
        style={{
          fontFamily: "NotoSans_600SemiBold",
          color: "black",
          marginTop: 16,
          fontSize: 24,
        }}
      >
        Hello there!
      </Text>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 32,
          gap: 16,
        }}
      >
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              color: "black",
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Email Address
          </Text>
          <TextInput
            placeholder="youremail@domain.com"
            textContentType="emailAddress"
            style={{
              backgroundColor: "#ECECEC80",
              paddingVertical: 13,
              borderRadius: 8,
              paddingLeft: 16,
              borderWidth: 1,
              borderColor: "#B0ABAD",
              fontSize: 16,
              color: "black",
            }}
          />
        </View>
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              color: "black",
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="**********"
            textContentType="password"
            secureTextEntry={true}
            style={{
              backgroundColor: "#ECECEC80",
              paddingVertical: 13,
              borderRadius: 8,
              paddingLeft: 16,
              borderWidth: 1,
              borderColor: "#B0ABAD",
              fontSize: 16,
              color: "black",
            }}
          />
        </View>
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 28 }}>
        <Button>
          <Link href="/auth/(passcode)/createPasscode">Continue</Link>
        </Button>
      </View>
      <Text
        style={{
          color: "#270162",
          fontFamily: "NotoSans_600SemiBold",
          marginTop: 24,
          fontSize: 16,
        }}
      >
        Change Password
      </Text>
      <Image
        source={require("../../assets/images/fingerprint.png")}
        style={{ marginTop: 28, width: 160, height: 160 }}
      ></Image>
    </View>
  );
};

export default LogInScreeen;
