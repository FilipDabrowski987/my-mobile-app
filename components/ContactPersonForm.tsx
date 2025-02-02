import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ContactPersonForm() {
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonSurname, setContactPersonSurname] = useState("");
  const [contactPersonPhone, setContactPersonPhone] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Imię:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContactPersonName}
        value={contactPersonName}
        placeholder="Podaj imię osoby kontaktowej"
        keyboardType="default"
      />

      <Text style={styles.label}>Nazwisko:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContactPersonSurname}
        value={contactPersonSurname}
        placeholder="Podaj nazwisko osoby kontaktowej"
        keyboardType="default"
      />

      <Text style={styles.label}>Telefon:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContactPersonPhone}
        value={contactPersonPhone}
        placeholder="Podaj numer telefonu osoby kontaktowej"
        keyboardType="phone-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  label: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
    marginBottom: 3,
    fontSize: 14,
    color: "#333",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
});
