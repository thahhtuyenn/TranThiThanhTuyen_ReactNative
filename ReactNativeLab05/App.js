import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { AppNavigation } from "./navigations/AppNavigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
