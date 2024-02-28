import { TextInput } from "react-native";
import BackHandler from "../Atoms/BackHandler";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
const AddPhoneNumberScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
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
            What’s Your Phone Number?
          </Text>
          <Text
            style={{
              color: "#392E32",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
            }}
          >
            We’ll need a phone number you own.
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
            Phone Number
          </Text>
          <TextInput
            inputMode="numeric"
            placeholder="08106454127"
            secureTextEntry={false}
            textContentType="name"
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
        <Button title="Next"></Button>
      </View>
    </View>
  );
};

export default AddPhoneNumberScreen;
