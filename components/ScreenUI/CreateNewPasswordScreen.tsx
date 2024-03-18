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

const CreateNewPasswordScreen = () => {
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
          Create new password
        </Text>
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
        >
          Your new password must be different from previous used passwords.
        </Text>
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}>
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
        <Text
          style={{
            color: "#392E32",
            fontFamily: "NotoSans_400Regular",
            fontSize: 12,
          }}
        >
          Must be atleast 8 characters.
        </Text>
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 10 }}>
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
        <Text
          style={{
            color: "#392E32",
            fontFamily: "NotoSans_400Regular",
            fontSize: 12,
          }}
        >
          Both password must match
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: "100%",
          backgroundColor: "white",
          marginBottom: 64,
        }}
      >
        <Button
          title="Next"
          onPress={() => router.push("/auth/(reset password)/successReset")}
        ></Button>
      </View>
    </View>
  );
};

export default CreateNewPasswordScreen;
