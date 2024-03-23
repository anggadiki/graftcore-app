import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
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
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/success.png")}
        style={styles.image}
      />
      <Text style={styles.title}>£1000 was</Text>
      <Text style={styles.subtitle}>transferred successfully</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go To Dashboard"
          onPress={() => router.push("/(tabs)/")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 24,
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
    marginTop: 87,
  },
  title: {
    color: "black",
    marginTop: 32,
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 18,
  },
  subtitle: {
    color: "black",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default SuccesTransferScreen;
