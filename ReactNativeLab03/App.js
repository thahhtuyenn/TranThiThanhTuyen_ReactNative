import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginFirstScreen from "./src/creens/LoginFirstScreen";
import Screen1a from "./src/creens/Screen1a";
import Screen1b from "./src/creens/Screen1b";
import Screen1c from "./src/creens/Screen1c";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1c />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
