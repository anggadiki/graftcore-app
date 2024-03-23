import { router } from "expo-router";
import Button from "../Atoms/Buttton";
import { Text, View } from "../Themed";

const MoreScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button title="Log Out" onPress={() => router.push("/")} />
    </View>
  );
};

export default MoreScreen;
