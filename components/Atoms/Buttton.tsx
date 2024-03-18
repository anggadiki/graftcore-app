import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { TouchableOpacity } from "react-native";

type Props = {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
};
const Button = (props: Props) => {
  const { title, children, onPress } = props;
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#F3387E",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
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
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
