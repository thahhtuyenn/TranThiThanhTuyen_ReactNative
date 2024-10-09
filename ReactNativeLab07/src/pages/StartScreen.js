import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MasterPortrait")}
      >
        <Text style={styles.textBtn}>Go to products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1BA9FF",
    margin: 30,
    borderRadius: 10,
  },
  textBtn: {
    color: "white",
    fontSize: 20,
  },
});