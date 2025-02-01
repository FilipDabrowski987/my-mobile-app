import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddPatientScreen() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [flatNumber, setFlatNumber] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [contactPersonSurname, setContactPersonSurname] = useState('');
    const [contactPersonPhone, setContactPersonPhone] = useState('');
    const [isSelected, setSelection] = useState(false);
    const router = useRouter();

    const handleAddPatient = async () => {
        
     } 
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            
            <Text style={styles.header}>Dodaj pacjenta</Text>

            <View style={styles.inputContainer}>
              
            <Text style={styles.label}>Imię:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Podaj imię"
                    keyboardType="default" />
                
            <Text style={styles.label}>Nazwisko:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setSurname}
                    value={surname}
                    placeholder="Podaj nazwisko"
                    keyboardType="default" />
                
            <Text style={styles.label}>Telefon:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Podaj nr telefonu"
                    keyboardType="phone-pad" />
                
            <Text style={styles.label}>Kod pocztowy:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setZipcode}
                    value={zipcode}
                    placeholder="Podaj kod pocztowy"
                    keyboardType="number-pad" />
                
            <Text style={styles.label}>Miejscowość:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setCity}
                    value={city}
                    placeholder="Podaj miejscowość"
                    keyboardType="default" />
                
            <Text style={styles.label}>Ulica:</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setStreet}
                    value={street}
                    placeholder="Podaj ulicę"
                keyboardType="default" />
              <View style={styles.inputHouseNumberContainer}>
                <View>
            <Text style={styles.label}>Nr domu:</Text>
            <TextInput
                    style={styles.inputHouseNumber}
                    onChangeText={setHouseNumber}
                    value={houseNumber}
                    placeholder="Podaj nr domu"
                keyboardType="numeric" />
                </View>
                <View>
            <Text style={styles.label}>Nr mieszkania:</Text>
            <TextInput
                    style={styles.inputHouseNumber}
                    onChangeText={setFlatNumber}
                    value={flatNumber}
                    placeholder="Podaj nr mieszkania"
                    keyboardType="numeric" />
                  </View>
              </View>
            </View>
            
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                color={isSelected ? "#007AFF" : undefined}
              />
                <Text>Pacjent nie jest osobą kontaktową</Text>
            </View>
            
            {isSelected && (
              <View style={styles.inputContainer}>
                <Text style={styles.header}>Osoba kontaktowa</Text>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Imię:</Text>
                <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonName}
                                    value={contactPersonName}
                                    placeholder="Podaj imię osoby kontaktowej"
                                    keyboardType="default" />
                                
                <Text style={styles.label}>Nazwisko:</Text>
                <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonSurname}
                                    value={contactPersonSurname}
                                    placeholder="Podaj nazwisko osoby kontaktowej"
                                    keyboardType="default" />
                                
                <Text style={styles.label}>Telefon:</Text>
                <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonPhone}
                                    value={contactPersonPhone}
                                    placeholder="Podaj numer telefonu osoby kontaktowej"
                    keyboardType="phone-pad" />
                  </View>
              </View>)}
            
          <View style={styles.buttonContainer}>
                <Button
                    title={'Zapisz'}
                    onPress={handleAddPatient}/>
                <Button
                    title={'Wróć'}
                onPress={() => router.back()} />
              </View>
          </View>
          </ScrollView>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '700',
    color: '#333',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
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
    width: '80%',
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  inputHouseNumberContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
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
  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
  }
})