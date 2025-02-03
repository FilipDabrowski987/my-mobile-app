import AdditionalOptionsForm from "@/components/AdditionalOptionsForm";
import AdresForm from "@/components/AdresForm";
import EmailForm from "@/components/EmailForm";
import NameForm from "@/components/NameForm";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddCarerScreen() {
  const [isSelected, setSelection] = useState(false);
  const router = useRouter();

  const handleAddCarer = async () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Dodaj opiekuna</Text>
          <NameForm />
          <EmailForm />
          <AdresForm />
          <AdditionalOptionsForm />
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#007AFF" : undefined}
            />
            <Text>Zatrudnienie z OWES</Text>
          </View>
          <Text>Dodać:</Text>
          <Text>Rodzaj zatrudnienia</Text>
          <Text>Wymiar czasu pracy</Text>
          <View style={styles.buttonContainer}>
            <Button title={"Zapisz"} onPress={handleAddCarer} />
            <Button title={"Wróć"} onPress={() => router.back()} />
          </View>
        </View>
      </ScrollView>
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
  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 15,
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
  },
});
