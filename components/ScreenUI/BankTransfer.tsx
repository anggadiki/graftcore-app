import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import { Image, TextInput } from "react-native";
import Line from "../Atoms/Line";
import Button from "../Atoms/Buttton";

const BankTransferScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        margin: 24,
      }}
    >
      <BackHandler />
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "50%",
            alignItems: "center",
            padding: 8,
            borderBottomWidth: 2,
            borderBottomColor: "#F77AA9",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 18,
            }}
          >
            Local
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "50%",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text
            style={{
              color: "#B0ABAD",
              fontFamily: "NotoSans_600SemiBold",
              fontSize: 18,
            }}
          >
            Internasional
          </Text>
        </View>
      </View>
      {/* amount box */}
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 32 }}>
        <Text
          style={{
            color: "#B0ABAD",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Amount to send
        </Text>
        <View
          style={{
            backgroundColor: "#ECECEC80",
            paddingVertical: 13,
            paddingHorizontal: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#B0ABAD",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 8,
          }}
        >
          <TextInput
            style={{
              backfaceVisibility: "hidden",
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
              width: "60%",
            }}
            placeholder="Enter amount"
            keyboardType="number-pad"
          />
          <View
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Image
              source={require("../../assets/images/bendera.png")}
              style={{ width: 30, height: 15 }}
            />
            <Text
              style={{
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
                color: "#B0ABAD",
              }}
            >
              NGN
            </Text>
          </View>
        </View>
      </View>
      {/* fee */}
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 38,
        }}
      >
        <Line />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            backgroundColor: "white",
            marginTop: 35,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              width: 14,
              height: 14,
              borderColor: "#F3387E",
              backgroundColor: "transparent",
              borderRadius: 100,
              marginLeft: 23,
            }}
          />
          <Text
            style={{
              color: "#B0ABAD",
              fontFamily: "NotoSans_400Regular",
              paddingBottom: 4,
              fontSize: 16,
            }}
          >
            FEE = FREE
          </Text>
        </View>
        <View
          style={{
            height: 2,
            width: 60,
            backgroundColor: "#B0ABAD",
            transform: [{ rotate: "90deg" }],
            marginTop: 35,
          }}
        />
        <Text
          style={{
            color: "#B0ABAD",
            fontFamily: "NotoSans_400Regular",
            marginLeft: 28,
            fontSize: 16,
            marginTop: 35,
          }}
        >
          Recipient gets
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 38,
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          source={require("../../assets/images/share.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={{ color: "#888184", fontFamily: "NotoSans_400Regular" }}>
          Usually arrives in minutes
        </Text>
      </View>
      <View style={{ backgroundColor: "transparent", marginTop: 24 }}>
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default BankTransferScreen;
