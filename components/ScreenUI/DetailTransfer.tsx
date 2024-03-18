import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native";
import Button from "../Atoms/Buttton";

const DetailTransferScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
  });
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Data 1" },
    { key: "2", value: "Data 2" },
  ];
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ backgroundColor: "white", margin: 24 }}>
      <BackHandler />
      <Text
        style={{
          color: "black",
          marginTop: 32,
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 18,
        }}
      >
        Recipient’s details
      </Text>
      {/* box input */}
      <View
        style={{
          marginTop: 16,
          backgroundColor: "white",
          width: "100%",
          gap: 4,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
            fontWeight: "400",
          }}
        >
          Bank name
        </Text>
        <SelectList
          setSelected={setSelected}
          data={data}
          boxStyles={{
            borderColor: "#B0ABAD",
            backgroundColor: "#ECECEC80",
            borderRadius: 8,
          }}
          dropdownStyles={{ backgroundColor: "#ECECEC80" }}
          dropdownTextStyles={{
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
          inputStyles={{
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
            color: "#B0ABAD",
          }}
          placeholder="Select a bank"
        />
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 8 }}>
        <Text
          style={{
            fontFamily: "NotoSans_400Regular",
            color: "black",
            fontWeight: "400",
            fontSize: 16,
          }}
        >
          Account Number
        </Text>
        <TextInput
          textContentType="name"
          style={{
            backgroundColor: "#ECECEC80",
            paddingVertical: 13,
            borderRadius: 8,
            paddingLeft: 16,
            borderWidth: 1,
            borderColor: "#B0ABAD",
            fontSize: 16,
            color: "black",
          }}
        />
      </View>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 8 }}>
        <Text
          style={{
            fontFamily: "NotoSans_400Regular",
            color: "black",
            fontWeight: "400",
            fontSize: 16,
          }}
        >
          Purpose
        </Text>
        <TextInput
          textContentType="name"
          style={{
            backgroundColor: "#ECECEC80",
            paddingVertical: 13,
            borderRadius: 8,
            paddingLeft: 16,
            borderWidth: 1,
            borderColor: "#B0ABAD",
            fontSize: 16,
            color: "black",
          }}
        />
      </View>
      {/* OR */}
      <Text
        style={{
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 16,
          color: "#120409",
          textAlign: "center",
          marginVertical: 16,
        }}
      >
        OR
      </Text>
      <SelectList
        setSelected={setSelected}
        data={data}
        boxStyles={{
          borderColor: "#B0ABAD",
          backgroundColor: "#ECECEC80",
          borderRadius: 8,
        }}
        dropdownStyles={{ backgroundColor: "#ECECEC80" }}
        dropdownTextStyles={{
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
        inputStyles={{
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
          color: "#B0ABAD",
        }}
        placeholder="Select a beneficiary"
      />
      <SelectList
        setSelected={setSelected}
        data={data}
        boxStyles={{
          borderColor: "#B0ABAD",
          backgroundColor: "#ECECEC80",
          borderRadius: 8,
          marginVertical: 16,
        }}
        dropdownStyles={{ backgroundColor: "#ECECEC80" }}
        dropdownTextStyles={{
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
        }}
        inputStyles={{
          fontFamily: "NotoSans_400Regular",
          fontSize: 16,
          color: "#B0ABAD",
        }}
        placeholder="One-Time"
      />
      <Button title="Continue" />
    </View>
  );
};

export default DetailTransferScreen;
