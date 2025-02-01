import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
  <View style={styles.container}>
    <Text style={styles.label}>Ekran ustawień</Text>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  label: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '700',
    color: '#333',
  }
})