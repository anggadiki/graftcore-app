import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#F3387E", headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
