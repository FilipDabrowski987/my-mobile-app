import AdditionalPatientOptionsForm from "@/components/AdditionalPatientOptionsForm";
import AdresForm from "@/components/AdresForm";
import ContactPersonForm from "@/components/ContactPersonForm";
import NameForm from "@/components/NameForm";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { FormContext } from "@/store/FormContext";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddPatientScreen() {
  const [isSelected, setSelection] = useState(false);
  const [contactPersons, setContactPersons] = useState([1]);
  const [text, setText] = useState("");
  const router = useRouter();

  const { formData } = useContext(FormContext);

  const handleAddContactPerson = () => {
    setContactPersons((prev) => [...prev, prev.length + 1]);
  };

  const handleRemoveContactPerson = () => {
    if (contactPersons.length > 1) {
      setContactPersons((prev) => prev.slice(0, -1));
    }
  };

  const handleAddPatient = async () => {
    const patientData = {
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      city: formData.city,
      zipcode: formData.zipcode,
      street: formData.street,
      houseNumber: formData.houseNumber,
      flatNumber: formData.flatNumber,
    };

    console.log("Dane pacjenta:", patientData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Dodaj podopiecznego</Text>
          <NameForm />
          <AdresForm />
          <AdditionalPatientOptionsForm />
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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Informacje dodatkowe:</Text>
            <TextInput
              style={styles.input}
              placeholder="Dodaj notatkę..."
              value={text}
              onChangeText={setText}
              multiline
              numberOfLines={6}
            />
          </View>
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
  input: {
    height: 80,
    width: "80%",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    textAlignVertical: "top",
  },
  label: {
    textAlign: "left",
    justifyContent: "flex-start",
    width: "80%",
    marginBottom: 3,
    fontSize: 14,
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
  addContactPersonButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
