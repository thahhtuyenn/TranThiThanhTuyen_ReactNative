import { View, StyleSheet, Pressable, Text } from "react-native";

export const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductScreen01")}
      >
        <Text style={styles.textBtn}>Column list screen</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductScreen02")}
      >
        <Text style={styles.textBtn}>Grid list screen</Text>
      </Pressable>
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
