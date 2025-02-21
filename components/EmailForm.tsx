import { FormContext } from "@/store/FormContext";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function EmailForm() {
  const { formData, updateField } = useContext(FormContext);
  // const [email, setEmail] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => updateField("email", text || null)}
        value={formData.email || ""}
        placeholder="Podaj adres email"
        keyboardType="email-address"
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
