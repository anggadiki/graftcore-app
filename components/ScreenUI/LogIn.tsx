import React from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
  NotoSans_800ExtraBold,
} from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
import { Link, router } from "expo-router";

const LogInScreeen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
    NotoSans_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.heading}>Hello there!</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            placeholder="youremail@domain.com"
            textContentType="emailAddress"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="**********"
            textContentType="password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => router.push("/auth/(passcode)/createPasscode")}
        />
      </View>
      <Link
        href="/auth/(reset password)/forgotPassword"
        style={styles.forgotPasswordLink}
      >
        <Text style={styles.forgotPasswordText}>Change Password</Text>
      </Link>
      <Image
        source={require("../../assets/images/fingerprint.png")}
        style={styles.fingerprintImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    margin: 24,
  },
  logo: {
    width: 172,
    height: 37,
    marginTop: 70,
  },
  heading: {
    fontFamily: "NotoSans_600SemiBold",
    color: "black",
    marginTop: 16,
    fontSize: 24,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 32,
    gap: 16,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "white",
  },
  inputLabel: {
    fontFamily: "NotoSans_400Regular",
    color: "black",
    fontWeight: "400",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#ECECEC80",
    paddingVertical: 13,
    borderRadius: 8,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#B0ABAD",
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 28,
  },
  forgotPasswordLink: {
    marginTop: 24,
  },
  forgotPasswordText: {
    color: "#270162",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 16,
  },
  fingerprintImage: {
    marginTop: 28,
    width: 160,
    height: 160,
  },
});

export default LogInScreeen;
