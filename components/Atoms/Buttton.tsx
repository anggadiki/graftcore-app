import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { TouchableOpacity } from "react-native";

type Props = {
  title?: string;
  children?: React.ReactNode;
};
const Button = (props: Props) => {
  const { title, children } = props;
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
        padding: 13,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: "NotoSans_400Regular",
            fontWeight: "700",
            fontSize: 18,
          }}
        >
          {title}
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
