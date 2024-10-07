import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DemoCrud } from "./src/pages/DemoCrud";
import { AppNavigation } from "./src/navigations/AppNavigation";
import react from 'react'
export default function App() {
  return (
    <View style={[styles.container, ]} >
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
