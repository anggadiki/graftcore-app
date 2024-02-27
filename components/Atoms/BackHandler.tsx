import { AntDesign } from "@expo/vector-icons";
import { View } from "../Themed";

const BackHandler = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "flex-start",
        backgroundColor: "white",
      }}
    >
      <AntDesign name="left" size={24} color="black" />
    </View>
  );
};

export default BackHandler;
