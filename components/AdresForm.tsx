import { FormContext } from "@/store/FormContext";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AdresForm() {
  const { formData, updateField } = useContext(FormContext);
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");

  const handleZipcodeChange = (text: string) => {
    let formattedText = text.replace(/\D/g, "");

    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}-${formattedText.slice(
        2,
        5
      )}`;
    }

    updateField("zipcode", formattedText);
  };

  const handleTextChange = (field: keyof typeof formData) => (text: string) => {
    updateField(field, text.charAt(0).toUpperCase() + text.slice(1));
  };

  // const handleStreetChange = (text: string) => {
  //   const formattedText = text.charAt(0).toUpperCase() + text.slice(1);
  //   setStreet(formattedText);
  // };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Kod pocztowy:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleZipcodeChange}
        value={formData.zipcode}
        placeholder="Podaj kod pocztowy"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Miejscowość:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange("city")}
        value={formData.city}
        placeholder="Podaj miejscowość"
        keyboardType="default"
      />

      <Text style={styles.label}>Ulica:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange("street")}
        value={formData.street}
        placeholder="Podaj ulicę"
        keyboardType="default"
      />

      <View style={styles.inputHouseNumberContainer}>
        <View style={styles.inputHouseNumberView}>
          <Text style={styles.label}>Nr domu:</Text>
          <TextInput
            style={styles.inputHouseNumber}
            onChangeText={handleTextChange("houseNumber")}
            value={formData.houseNumber}
            placeholder="Nr domu"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputHouseNumberView}>
          <Text style={styles.label}>Nr mieszkania:</Text>
          <TextInput
            style={styles.inputHouseNumber}
            onChangeText={handleTextChange("flatNumber")}
            value={formData.flatNumber}
            placeholder="Nr mieszkania"
            keyboardType="default"
          />
        </View>
      </View>
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
  inputHouseNumberContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    gap: 10,
  },
  inputHouseNumberView: {
    width: "48%",
  },
  inputHouseNumber: {
    height: 40,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
});
