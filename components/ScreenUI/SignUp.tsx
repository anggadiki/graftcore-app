import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "../Themed";
import { useFonts, NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
import { router } from "expo-router";
import BackHandler from "../Atoms/BackHandler";

const SignUpScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BackHandler />
      <Text style={styles.heading}>Email & Password</Text>
      <Text style={styles.description}>
        Open a Graftcore account with a few details. Your password must have at
        least 8 characters including letters and a number.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            placeholder="Adewoleazeez4@gmail.com"
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
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            placeholder="**********"
            textContentType="password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By tapping “Next”, you agree to our Terms & Conditions and Privacy
          Policy.
        </Text>
        <Button
          title="Next"
          onPress={() => router.push("/auth/(sign up)/confirmEmail")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 24,
  },
  heading: {
    fontSize: 18,
    color: "black",
    fontFamily: "NotoSans_400Regular",
    fontWeight: "700",
    marginTop: 24,
  },
  description: {
    color: "black",
    fontFamily: "NotoSans_400Regular",
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 24,
    gap: 10,
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
  footer: {
    backgroundColor: "white",
    flexBasis: "35%",
    justifyContent: "flex-end",
    gap: 24,
  },
  footerText: {
    color: "black",
    fontFamily: "NotoSans_400Regular",
  },
});

export default SignUpScreen;
