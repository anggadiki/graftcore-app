import React from "react";
import { View } from "../Themed";
import { StyleSheet } from "react-native";

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: 60,
    backgroundColor: "#B0ABAD",
    transform: [{ rotate: "90deg" }],
  },
});

export default Line;
