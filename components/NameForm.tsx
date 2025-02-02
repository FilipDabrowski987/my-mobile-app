import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NameForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Imię:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Podaj imię"
        keyboardType="default"
      />

      <Text style={styles.label}>Nazwisko:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="Podaj nazwisko"
        keyboardType="default"
      />

      <Text style={styles.label}>Telefon:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Podaj nr telefonu"
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
