import { Image } from "react-native";
import { Text, View } from "../Themed";
import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";

type Props = {
  source: any;
  title?: String;
};
const Icon = ({ source, title }: Props) => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        backgroundColor: "white",
        gap: 4,
        alignItems: "center",
        marginHorizontal: 12,
      }}
    >
      <View
        style={{
          backgroundColor: "#FDD7E5",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#FBBDD4",
          width: 42,
          height: 42,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={source} style={{ width: 30, height: 30 }} />
      </View>
      <Text
        style={{
          fontFamily: "NotoSans_400Regular",
          fontSize: 12,
          color: "black",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Icon;
