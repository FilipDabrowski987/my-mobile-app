import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Wyszukaj:</Text>
        <Button
          title={'Opiekuna'}
          onPress={() => router.push('/')} />
        <Button
          title={'Pacjenta'}
          onPress={() => router.push('/')} />
        <Button
          title={'Wróć'}
          onPress={() => router.back()} />
      </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    gap: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '700',
    color: '#333',
  }
})