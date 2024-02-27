import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_800ExtraBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import { SafeAreaView, TextInput } from "react-native";
import Button from "../Atoms/Buttton";

const CreateAccountScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
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
      <BackHandler />
      <View style={{ width: "100%", backgroundColor: "white" }}>
        <View
          style={{ width: "100%", backgroundColor: "white", marginTop: 24 }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 18,
            }}
          >
            Tell us a little bit about yourself
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
              textAlign: "left",
            }}
          >
            Please add your name as it appears on your official documents and
            IDs.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            marginTop: 20,
            gap: 11,
          }}
        >
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              Legal First Name
            </Text>
            <TextInput
              placeholder="John"
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
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              Legal Middle Name (Optional)
            </Text>
            <TextInput
              placeholder="Hendricks"
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
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              Legal Last Name
            </Text>
            <TextInput
              placeholder="Doe"
              secureTextEntry={false}
              textContentType="name"
              inputMode="text"
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
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              Gender
            </Text>
            <TextInput
              placeholder="Male or Female"
              secureTextEntry={false}
              textContentType="name"
              inputMode="text"
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
          <SafeAreaView style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              Date of birth
            </Text>
            <TextInput
              placeholder="DD/MM/YY"
              secureTextEntry={false}
              textContentType="name"
              inputMode="text"
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
          </SafeAreaView>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              justifyContent: "flex-end",
              paddingTop: 32,
            }}
          >
            <Button title="Next"></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
