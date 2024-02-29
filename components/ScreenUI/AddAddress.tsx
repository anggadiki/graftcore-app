import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";
import { Link } from "expo-router";

const AddAddressScreen = () => {
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
            What’s Your Home Address?
          </Text>
          <Text
            style={{
              color: "#392E32",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
            }}
          >
            Please use your actual house address.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            marginTop: 24,
            gap: 11,
          }}
        >
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
              }}
            >
              State
            </Text>
            <TextInput
              inputMode="text"
              placeholder="Enter a State"
              secureTextEntry={false}
              textContentType="addressState"
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
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
              }}
            >
              L.G.A
            </Text>
            <TextInput
              inputMode="text"
              placeholder="Enter a L.G.A"
              secureTextEntry={false}
              textContentType="countryName"
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
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
              }}
            >
              City
            </Text>
            <TextInput
              inputMode="text"
              placeholder="Enter a city"
              secureTextEntry={false}
              textContentType="addressCity"
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
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
              }}
            >
              House Number
            </Text>
            <TextInput
              inputMode="text"
              placeholder="House 9"
              secureTextEntry={false}
              textContentType="fullStreetAddress"
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
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                color: "black",
                fontFamily: "NotoSans_400Regular",
                fontSize: 16,
              }}
            >
              Street Name
            </Text>
            <TextInput
              inputMode="text"
              placeholder="Name of your street"
              secureTextEntry={false}
              textContentType="fullStreetAddress"
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
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          width: "100%",
          justifyContent: "flex-end",
          marginBottom: 63,
        }}
      >
        <Button title="Next"></Button>
      </View>
    </View>
  );
};

export default AddAddressScreen;
