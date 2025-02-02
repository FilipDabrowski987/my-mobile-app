import NameForm from "@/components/NameForm";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddCarerScreen() {
  const router = useRouter();

  const handleAddCarer = async () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Dodaj opiekuna</Text>
        <NameForm />
        <View style={styles.buttonContainer}>
          <Button title={"Zapisz"} onPress={handleAddCarer} />
          <Button title={"Wróć"} onPress={() => router.back()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "700",
    color: "#333",
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
  },
});
