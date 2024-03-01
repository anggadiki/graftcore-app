import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import BackHandler from "../Atoms/BackHandler";
import { Text, View } from "../Themed";
import { Image, TextInput } from "react-native";

const numbers = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];
const CreatePasscodeScreen = () => {
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
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}>
        <Text
          style={{
            fontFamily: "NotoSans_600SemiBold",
            color: "black",
            fontSize: 18,
          }}
        >
          Create a Passcode
        </Text>
        <Text
          style={{
            fontFamily: "NotoSans_400Regular",
            color: "black",
            fontSize: 16,
            paddingRight: 5,
          }}
        >
          Sign into your app with your Passcode. Please do not share this
          Passcode with anyone.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
          marginTop: 32,
        }}
      >
        <Image
          source={require("../../assets/images/lock.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text
          style={{
            fontFamily: "NotoSans_400Regular",
            color: "#888184",
            fontSize: 18,
          }}
        >
          Passcode
        </Text>
      </View>
      <View style={{ backgroundColor: "white", flexDirection: "row" }}>
        {numbers.map((number) => (
          <View style={{ backgroundColor: "white" }} key={number.value}>
            <TextInput
              placeholder="•"
              placeholderTextColor="#B0ABAD"
              style={{
                backfaceVisibility: "hidden",
                width: 49,
                height: 49,
                borderRadius: 8,
                textAlign: "center",
                fontSize: 16,
                color: "black",
              }}
              maxLength={1}
              keyboardType="number-pad"
              secureTextEntry={true}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CreatePasscodeScreen;
