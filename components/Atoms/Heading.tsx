import { Image } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Ionicons } from "@expo/vector-icons";

const Heading = () => {
  const [fontLoaded, error] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
  });
  if (!fontLoaded && !error) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          backgroundColor: "white",
          gap: 11,
        }}
      >
        <Image
          source={require("../../assets/images/profile.png")}
          style={{ width: 25, height: 25, borderRadius: 100 }}
        />
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 12,
          }}
        >
          John Hendricks
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 11, backgroundColor: "white" }}>
        <Ionicons name="settings" size={24} color="#888184" />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#888184"
          style={{ position: "relative" }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: 100,
            width: 8,
            height: 8,
            top: -3,
            right: -1,
          }}
        />
      </View>
    </View>
  );
};

export default Heading;
