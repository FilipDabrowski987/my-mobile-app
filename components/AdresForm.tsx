import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AdresForm() {
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Kod pocztowy:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setZipcode}
        value={zipcode}
        placeholder="Podaj kod pocztowy"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Miejscowość:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Podaj miejscowość"
        keyboardType="default"
      />

      <Text style={styles.label}>Ulica:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setStreet}
        value={street}
        placeholder="Podaj ulicę"
        keyboardType="default"
      />

      <View style={styles.inputHouseNumberContainer}>
        <View>
          <Text style={styles.label}>Nr domu:</Text>
          <TextInput
            style={styles.inputHouseNumber}
            onChangeText={setHouseNumber}
            value={houseNumber}
            placeholder="Podaj nr domu"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={styles.label}>Nr mieszkania:</Text>
          <TextInput
            style={styles.inputHouseNumber}
            onChangeText={setFlatNumber}
            value={flatNumber}
            placeholder="Podaj nr mieszkania"
            keyboardType="numeric"
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
  inputHouseNumber: {
    height: 40,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
});
