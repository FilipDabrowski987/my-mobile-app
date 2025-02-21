import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { FormContext } from "@/store/FormContext";

export default function NameForm() {
  const { formData, updateField } = useContext(FormContext);

  const handlePhoneFocus = () => {
    if (!formData.phone || !formData.phone.startsWith("+48")) {
      updateField("phone", "+48 ");
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone.trim() === "+48") {
      updateField("phone", "");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Imię:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          updateField("name", text.charAt(0).toUpperCase() + text.slice(1))
        }
        value={formData.name}
        placeholder="Podaj imię"
        keyboardType="default"
      />

      <Text style={styles.label}>Nazwisko:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          updateField("surname", text.charAt(0).toUpperCase() + text.slice(1))
        }
        value={formData.surname}
        placeholder="Podaj nazwisko"
        keyboardType="default"
      />

      <Text style={styles.label}>Telefon:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => updateField("phone", text)}
        value={formData.phone}
        placeholder="Podaj nr telefonu"
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
