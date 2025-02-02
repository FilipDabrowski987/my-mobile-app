import AdresForm from "@/components/AdresForm";
import ContactPersonForm from "@/components/ContactPersonForm";
import NameForm from "@/components/NameForm";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddPatientScreen() {
  const [isSelected, setSelection] = useState(false);
  const [isLyingDownPerson, setLyingDownPerson] = useState(false);
  const [contactPersons, setContactPersons] = useState([1]);
  const router = useRouter();

  const handleAddContactPerson = () => {
    setContactPersons((prev) => [...prev, prev.length + 1]);
  };

  const handleRemoveContactPerson = () => {
    if (contactPersons.length > 1) {
      setContactPersons((prev) => prev.slice(0, -1));
    }
  };

  const handleAddPatient = async () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Dodaj podopiecznego</Text>
          <NameForm />
          <AdresForm />

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isLyingDownPerson}
              onValueChange={setLyingDownPerson}
              color={isLyingDownPerson ? "#007AFF" : undefined}
            />
            <Text>Osoba leżąca</Text>
          </View>

          <Text>Dodać:</Text>
          <Text>Stopień niepełnosprawności</Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#007AFF" : undefined}
            />
            <Text>Podopieczny nie jest osobą kontaktową</Text>
          </View>

          {isSelected && (
            <View style={styles.inputContainer}>
              {contactPersons.map((num, index) => (
                <View key={num} style={styles.inputContainer}>
                  <Text style={styles.header}>
                    {contactPersons.length > 1
                      ? `Osoba kontaktowa nr ${index + 1}`
                      : "Osoba kontaktowa"}
                  </Text>
                  <ContactPersonForm />
                </View>
              ))}

              <View style={styles.addContactPersonButton}>
                <Button title={"+"} onPress={handleAddContactPerson} />
                <Text>Dodaj kolejną osobę kontaktową</Text>
              </View>
              {contactPersons.length > 1 && (
                <View style={styles.addContactPersonButton}>
                  <Button title={"-"} onPress={handleRemoveContactPerson} />
                  <Text>Usuń osobę kontaktową</Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.buttonContainer}>
            <Button title={"Zapisz"} onPress={handleAddPatient} />
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
    fontWeight: "700",
    color: "#333",
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
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
  addContactPersonButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
