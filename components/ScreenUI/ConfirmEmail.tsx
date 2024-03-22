import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "../Themed";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import Button from "../Atoms/Buttton";
import { router } from "expo-router";
import BackHandler from "../Atoms/BackHandler";

const ConfirmEmailScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BackHandler />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Confirm your email address</Text>
        <Text style={styles.description}>
          We’ll send a code to your email address to confirm you own it.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.email}>JohnHendricks@gmail.com</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Verification Code</Text>
          <TextInput
            placeholder="**********"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Text style={styles.resendCode}>Resend Code</Text>
          <Text style={styles.openEmail}>Open Email App</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Next"
            onPress={() => router.push("/auth/(account setup)/createAccount")}
          />
        </View>
      </View>
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
  infoContainer: {
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 24,
  },
  title: {
    color: "black",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 18,
  },
  description: {
    color: "black",
    fontFamily: "NotoSans_400Regular",
    fontSize: 16,
    paddingTop: 8,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 24,
    gap: 24,
  },
  email: {
    color: "black",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 24,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "white",
  },
  inputLabel: {
    fontFamily: "NotoSans_400Regular",
    color: "black",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "#ECECEC80",
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "NotoSans_400Regular",
    borderColor: "#B0ABAD",
    borderWidth: 1,
  },
  buttonsContainer: {
    backgroundColor: "white",
    alignItems: "center",
    gap: 24,
  },
  resendCode: {
    color: "#9380B0",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 16,
  },
  openEmail: {
    color: "black",
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 16,
  },
  footer: {
    backgroundColor: "white",
    flexBasis: "35%",
    justifyContent: "flex-end",
    width: "100%",
  },
});

export default ConfirmEmailScreen;
