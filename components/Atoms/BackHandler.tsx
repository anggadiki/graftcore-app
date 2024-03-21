import { AntDesign } from "@expo/vector-icons";
import { View } from "../Themed";
import { StyleSheet } from "react-native";

const BackHandler = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="left" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
});

export default BackHandler;
