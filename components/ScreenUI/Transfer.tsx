import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import BackHandler from "../Atoms/BackHandler";
import { Text, View } from "../Themed";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image, TextInput } from "react-native";

const TransferScreen = () => {
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
        backgroundColor: "white",
        flex: 1,
        margin: 24,
      }}
    >
      <BackHandler />
      <TextInput
        style={{
          width: "100%",
          backgroundColor: "#ECECEC80",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#B0ABAD",
          paddingVertical: 11,
          paddingHorizontal: 16,
          paddingLeft: 48,
          marginTop: 32,
          position: "relative",
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
        placeholder="Search contact name"
      />
      <Feather
        name="search"
        size={24}
        color="black"
        style={{ position: "absolute", left: 16, top: 72 }}
      />
      {/* bank card */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#B0ABAD",
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 16,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 17,
        }}
      >
        <View
          style={{
            backgroundColor: "#F3387E",
            borderRadius: 100,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/bank.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={{ backgroundColor: "white" }}>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 16,
              position: "relative",
            }}
          >
            To Bank account
          </Text>
          <Text
            style={{
              color: "#392E32",
              fontFamily: "NotoSans_400Regular",
              fontSize: 12,
            }}
          >
            Transfers to bank accounts are free
          </Text>
          <Image
            source={require("../../assets/images/free.png")}
            style={{
              position: "absolute",
              right: 46,
              top: 7,
              width: 17,
              height: 14,
            }}
          />
        </View>
        <AntDesign name="right" size={24} color="#392E32" />
      </View>
      {/* mobile card */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#B0ABAD",
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 16,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 17,
        }}
      >
        <View
          style={{
            backgroundColor: "#F3387E",
            borderRadius: 100,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/mobile-2.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={{ backgroundColor: "white" }}>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 16,
              position: "relative",
            }}
          >
            To Mobile Money
          </Text>
          <Text
            style={{
              color: "#392E32",
              fontFamily: "NotoSans_400Regular",
              fontSize: 12,
            }}
          >
            Transfers to mobile money is free
          </Text>
          <Image
            source={require("../../assets/images/free.png")}
            style={{
              position: "absolute",
              right: 33,
              top: 7,
              width: 17,
              height: 14,
            }}
          />
        </View>
        <AntDesign name="right" size={24} color="#392E32" />
      </View>
      {/* see more text */}
      <View
        style={{
          marginTop: 9,
          backgroundColor: "white",
          flexDirection: "row",
          gap: 10,
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#392E32",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
        >
          See more options
        </Text>
        <AntDesign name="down" size={22} color="#392E32" />
      </View>
    </View>
  );
};

export default TransferScreen;
