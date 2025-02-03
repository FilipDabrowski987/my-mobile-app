import { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function AdditionalOptionsForm() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Zatrudnienie z OWES:</Text>
      <View style={styles.pickerContainer}>
        {!selectedLanguage && (
          <Text style={styles.placeholder}>Wybierz opcję...</Text>
        )}
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="" value="" enabled={false} />
          <Picker.Item label="TAK" value="Tak" />
          <Picker.Item label="NIE" value="Nie" />
        </Picker>
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
  pickerContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    paddingVertical: 0,
  },
  placeholder: {
    position: "absolute",
    fontSize: 14,
    color: "gray",
    padding: 10,
  },
});
