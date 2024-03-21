import React from "react";
import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

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
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>
        {title}
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F3387E",
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    borderRadius: 10,
  },
  text: {
    fontFamily: "NotoSans_400Regular",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default Button;
