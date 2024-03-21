import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Ionicons } from "@expo/vector-icons";

const Heading = () => {
  const [fontLoaded, error] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
  });

  if (!fontLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Hendricks</Text>
      </View>
      <View style={styles.icons}>
        <Ionicons name="settings" size={24} color="#888184" />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#888184"
          style={styles.notificationIcon}
        />
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    gap: 11,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  userName: {
    color: "black",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 12,
  },
  icons: {
    flexDirection: "row",
    gap: 11,
    backgroundColor: "white",
  },
  notificationIcon: {
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    backgroundColor: "red",
    borderRadius: 100,
    width: 8,
    height: 8,
    top: -3,
    right: -1,
  },
});

export default Heading;
