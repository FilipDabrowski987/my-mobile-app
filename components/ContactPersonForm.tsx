import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ContactPersonForm() {
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonSurname, setContactPersonSurname] = useState("");
  const [contactPersonPhone, setContactPersonPhone] = useState("");
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const handlePhoneChange = (text: string) => {
    if (!text.startsWith("+48")) {
      setContactPersonPhone(text);
    } else {
      setContactPersonPhone(text);
    }
  };

  const handlePhoneFocus = () => {
    if (contactPersonPhone === "") {
      setContactPersonPhone("+48 ");
    }
    setIsPhoneFocused(true);
  };

  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
  };

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
        onChangeText={handlePhoneChange}
        value={contactPersonPhone}
        placeholder="Podaj nr telefonu osoby kontaktowej"
        keyboardType="phone-pad"
        onFocus={handlePhoneFocus}
        onBlur={handlePhoneBlur}
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
