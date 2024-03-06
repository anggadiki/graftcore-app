import Heading from "../Atoms/Heading";
import { Text, View } from "../Themed";

const DashboardScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        padding: 24,
      }}
    >
      <Heading />
    </View>
  );
};

export default DashboardScreen;
