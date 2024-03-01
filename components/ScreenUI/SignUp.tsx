import { Text, View } from "../Themed";
import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";
import BackHandler from "../Atoms/BackHandler";

const SignUpScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 24,
      }}
    >
      <BackHandler />
      <Text
        style={{
          fontSize: 18,
          color: "black",
          fontFamily: "NotoSans_400Regular",
          fontWeight: "700",
          marginTop: 24,
        }}
      >
        Email & Password
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
      >
        Open a Graftcore account with a few details. your password must have at
        least 8 characters including letters and a number
      </Text>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 24,
          gap: 10,
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
            placeholder="Adewoleazeez4@gmail.com"
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
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              color: "black",
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Confirm Password
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
      <View
        style={{
          backgroundColor: "white",
          flexBasis: "35%",
          justifyContent: "flex-end",
          gap: 24,
        }}
      >
        <Text style={{ color: "black", fontFamily: "NotoSans_400Regular" }}>
          By tapping “Next”, you agree to our Terms & Conditions and Privacy
          Policy.
        </Text>
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <Button>
            <Link href="/auth/(sign up)/confirmEmail">Next</Link>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
