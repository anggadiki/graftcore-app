import { Text, View } from "../Themed";

const DashboardScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ color: "black" }}>Dashboard</Text>
    </View>
  );
};

export default DashboardScreen;
