import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FormContext } from "@/store/FormContext";

export default function AdditionalPatientOptionsForm() {
  const { updateField } = useContext(FormContext);
  const [degreeOfDisability, setDegreeOfDisability] = useState<
    string | undefined
  >(undefined);
  const [isLyingDownPerson, setLyingDownPerson] = useState<string | undefined>(
    undefined
  );

  const handleDegreeOfDisabilityChange = (itemValue: string) => {
    setDegreeOfDisability(itemValue);
    updateField("degreeOfDisability", itemValue);
  };

  const handleIsLyingDownPersonChange = (itemValue: string) => {
    setLyingDownPerson(itemValue);
    updateField("isLyingDownPerson", itemValue);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Stopień niepełnosprawności:</Text>
      <View style={styles.pickerContainer}>
        {/* {!degreeOfDisability && (
          <Text style={styles.placeholder}>Wybierz opcję...</Text>
        )} */}
        <Picker
          selectedValue={degreeOfDisability}
          onValueChange={handleDegreeOfDisabilityChange}
        >
          <Picker.Item label="Wybierz opcję..." value="" enabled={false} />
          <Picker.Item label="Lekki" value="Lekki" />
          <Picker.Item label="Umiarkowany" value="Umiarkowany" />
          <Picker.Item label="Znaczny" value="Znaczny" />
        </Picker>
      </View>

      <Text style={styles.label}>Osoba leżąca:</Text>
      <View style={styles.pickerContainer}>
        {/* {!isLyingDownPerson && (
          <Text style={styles.placeholder}>Wybierz opcję...</Text>
        )} */}
        <Picker
          selectedValue={isLyingDownPerson}
          onValueChange={handleIsLyingDownPersonChange}
        >
          <Picker.Item label="Wybierz opcję..." value="" enabled={false} />
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
