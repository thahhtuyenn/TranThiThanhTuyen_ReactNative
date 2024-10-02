import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DemoCrud } from './src/pages/DemoCrud';

export default function App() {
  return (
    <View style={styles.container}>
      <DemoCrud/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
