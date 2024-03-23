import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { Image } from "react-native";
import Button from "../Atoms/Buttton";
import { router } from "expo-router";

const SuccesTransferScreen = () => {
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
        margin: 24,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/images/success.png")}
        style={{ width: 160, height: 160, marginTop: 87 }}
      />
      <Text
        style={{
          color: "black",
          marginTop: 32,
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 18,
        }}
      >
        £1000 was
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 18,
        }}
      >
        transferred successfully
      </Text>
      <View
        style={{ marginTop: 40, width: "100%", backgroundColor: "transparent" }}
      >
        <Button
          title="Go To Dashboard"
          onPress={() => router.push("/(tabs)/")}
        />
      </View>
    </View>
  );
};

export default SuccesTransferScreen;
