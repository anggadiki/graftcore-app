import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";

type Props = {
  source: any;
  title?: string;
};

const Icon = ({ source, title }: Props) => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={source} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    gap: 4,
  },
  iconWrapper: {
    backgroundColor: "#FDD7E5",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FBBDD4",
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 12,
    color: "black",
  },
});

export default Icon;
