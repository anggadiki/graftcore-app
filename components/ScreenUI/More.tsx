import React from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "../Atoms/Buttton";
import { View } from "../Themed";

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={() => router.push("/")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default MoreScreen;
