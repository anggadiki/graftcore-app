import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import { Text, View } from "../Themed";
import BackHandler from "../Atoms/BackHandler";
import Button from "../Atoms/Buttton";

const ConfirmTransferScreen = () => {
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
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            color: "#392E32",
            fontFamily: "NotoSans_400Regular",
            fontSize: 16,
          }}
        >
          You are sending money to
        </Text>
        <Text
          style={{
            color: "#392E32",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Adewole Abdulazeez
        </Text>
        {/* qty */}
        <View
          style={{
            width: "100%",
            padding: 16,
            marginVertical: 24,
            gap: 8,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#392E32",
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_600SemiBold",
                fontSize: 16,
              }}
            >
              You send exactly
            </Text>
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_600SemiBold",
                fontSize: 18,
              }}
            >
              £1000
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_400Regular",
                fontSize: 18,
              }}
            >
              Adewole gets
            </Text>
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_600SemiBold",
                fontSize: 18,
              }}
            >
              £1000
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_400Regular",
                fontSize: 18,
              }}
            >
              Fee
            </Text>
            <Text
              style={{
                color: "#392E32",
                fontFamily: "NotoSans_600SemiBold",
                fontSize: 18,
              }}
            >
              Free
            </Text>
          </View>
        </View>
        {/* button */}
        <View style={{ width: "100%", backgroundColor: "transparent" }}>
          <Button title="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default ConfirmTransferScreen;
