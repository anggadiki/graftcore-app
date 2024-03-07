import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import Heading from "../Atoms/Heading";
import { Text, View } from "../Themed";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import Icon from "../Atoms/Icon";

const DashboardScreen = () => {
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
        padding: 24,
      }}
    >
      <Heading />
      <View
        style={{
          width: "100%",
          backgroundColor: "#F3387E",
          padding: 8,
          borderRadius: 8,
          marginTop: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#F3387E",
          }}
        >
          <View
            style={{ backgroundColor: "#F3387E", flexDirection: "row", gap: 8 }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
              }}
            >
              Total balance
            </Text>
            <AntDesign name="eye" size={24} color="white" />
          </View>
          <View
            style={{ backgroundColor: "#F3387E", flexDirection: "row", gap: 8 }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
              }}
            >
              Transaction History
            </Text>
            <Feather name="chevron-right" size={24} color="white" />
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontFamily: "NotoSans_600SemiBold",
            fontSize: 18,
          }}
        >
          £2300.00
        </Text>
        <View
          style={{
            backgroundColor: "#F3387E",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 32,
            gap: 44,
          }}
        >
          <View
            style={{
              backgroundColor: "#F3387E",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/send-square.png")}
              style={{ width: 35, height: 32 }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
              }}
            >
              Add Money
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F3387E",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/arrange-square.png")}
              style={{ width: 35, height: 32 }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
              }}
            >
              Transfer
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F3387E",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/top-square.png")}
              style={{ width: 35, height: 32 }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "NotoSans_400Regular",
                fontSize: 12,
              }}
            >
              Request Money
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          color: "black",
          fontFamily: "NotoSans_600SemiBold",
          fontSize: 16,
          marginVertical: 16,
        }}
      >
        Payments
      </Text>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <Icon
          source={require("../../assets/images/simcard.png")}
          title="Airtime"
        />
        <Icon source={require("../../assets/images/mobile.png")} title="Data" />
        <Icon source={require("../../assets/images/monitor.png")} title="Tv" />
        <Icon
          source={require("../../assets/images/cloud-change.png")}
          title="Internet"
        />
        <Icon
          source={require("../../assets/images/electricity.png")}
          title="Electricity"
        />
        <Icon source={require("../../assets/images/bag-2.png")} title="Deals" />
        <Icon source={require("../../assets/images/game.png")} title="Game" />
        <Icon source={require("../../assets/images/menu.png")} title="More" />
      </View>
    </View>
  );
};

export default DashboardScreen;
