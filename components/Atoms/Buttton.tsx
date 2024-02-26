import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";

type Props = {
  title?: string;
};
const Button = (props: Props) => {
  const { title } = props;
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        backgroundColor: "#F3387E",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "NotoSans_400Regular",
          fontWeight: "700",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Button;
