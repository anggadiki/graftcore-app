import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_600SemiBold,
} from "@expo-google-fonts/noto-sans";
import Heading from "../Atoms/Heading";
import { Text, View } from "../Themed";
import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
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
          rowGap: 16,
          columnGap: 43,
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
      <View
        style={{
          backgroundColor: "#FDD7E533",
          borderRadius: 8,
          flexDirection: "row",
          marginTop: 24,
          paddingVertical: 8,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{ backgroundColor: "#FDD7E533", flexDirection: "row", gap: 8 }}
        >
          <AntDesign
            name="notification"
            size={24}
            color="#61585B"
            style={{ transform: [{ rotateY: "180deg" }] }}
          />
          <Text
            style={{
              color: "#61585B",
              fontFamily: "NotoSans_400Regular",
              fontSize: 12,
            }}
          >
            Upgrade your KYC to earn more access
          </Text>
        </View>
        <AntDesign name="right" size={18} color="#61585B" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 24,
          flexDirection: "row",
          padding: 8,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#B0ABAD",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FDD7E5",
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#FBBDD4",
            width: 42,
            height: 42,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="volume-up" size={24} color="#F3387E" />
        </View>
        <View style={{ backgroundColor: "white", paddingLeft: 8 }}>
          <Text
            style={{
              color: "black",
              fontFamily: "NotoSans_600SemiBold",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Refer & Earn
          </Text>
          <Text
            style={{
              color: "#888184",
              fontFamily: "NotoSans_400Regular",
              fontSize: 12,
            }}
          >
            Get £5 bonus for each new user you...
          </Text>
        </View>
        <Ionicons
          name="close"
          size={25}
          color="#B0ABAD"
          style={{ paddingLeft: 32 }}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
