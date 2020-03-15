import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 0,
    overflow: "hidden"
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "transparent",
  },
});

export default styles;
