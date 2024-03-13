import { View } from "../Themed";

const Line = () => {
  return (
    <View
      style={{
        height: 2,
        width: 60,
        backgroundColor: "#B0ABAD",
        transform: [{ rotate: "90deg" }],
      }}
    />
  );
};

export default Line;
