import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FormContext } from "@/store/FormContext";

export default function AdditionalCarerOptionsForm() {
  const { updateField } = useContext(FormContext);
  const [isOwes, setOwes] = useState<string | null>(null);
  const [typeOfContract, setTypeOfContract] = useState<string | null>(null);
  const [workingTime, setWorkingTime] = useState<string | null>(null);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Zatrudnienie z OWES:</Text>
      <View style={styles.pickerContainer}>
        {/* {!isOwes && <Text style={styles.placeholder}>Wybierz opcję...</Text>} */}
        <Picker
          selectedValue={isOwes}
          onValueChange={(itemValue) => {
            setOwes(itemValue);
            updateField("isOwes", itemValue);
          }}
        >
          <Picker.Item label="Wybierz opcję..." value="" enabled={false} />
          <Picker.Item label="TAK" value="Tak" />
          <Picker.Item label="NIE" value="Nie" />
        </Picker>
      </View>

      <Text style={styles.label}>Rodzaj zatrudnienia:</Text>
      <View style={styles.pickerContainer}>
        {/* {!typeOfContract && (
          <Text style={styles.placeholder}>Wybierz opcję...</Text>
        )} */}
        <Picker
          selectedValue={typeOfContract}
          onValueChange={(itemValue) => {
            setTypeOfContract(itemValue);
            updateField("typeOfContract", itemValue);
          }}
        >
          <Picker.Item label="Wybierz opcję..." value="" enabled={false} />
          <Picker.Item label="Umowa o pracę" value="Umowa o pracę" />
          <Picker.Item label="Umowa zlecenie" value="Umowa zlecenie" />
        </Picker>
      </View>

      <Text style={styles.label}>Wymiar czasu pracy:</Text>
      <View style={styles.pickerContainer}>
        {/* {!workingTime && (
          <Text style={styles.placeholder}>Wybierz opcję...</Text>
        )} */}
        <Picker
          selectedValue={workingTime}
          onValueChange={(itemValue) => {
            setWorkingTime(itemValue);
            updateField("workingTime", itemValue);
          }}
        >
          <Picker.Item label="Wybierz opcję..." value="" enabled={false} />
          <Picker.Item label="Cały etat" value="Cały etat" />
          <Picker.Item label="1/2 etatu" value="1/2 etatu" />
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
