import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginFirstScreen from "./src/pages/LoginFirstScreen";
import Screen1a from "./src/pages/Screen1a";
import Screen1b from "./src/pages/Screen1b";
import Screen1c from "./src/pages/Screen1c";
import Screen1d from "./src/pages/Screen1d";
import Screen1e from "./src/pages/Screen1e";
import Screen2a from "./src/pages/Screen2a";
import XMEyeScreen from "./src/pages/XMEyeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <XMEyeScreen />
      <View style={{}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
