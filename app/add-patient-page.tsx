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
    const [contactPersonName, setContactPersonName] = useState('');
    const [contactPersonSurname, setContactPersonSurname] = useState('');
    const [contactPersonPhone, setContactPersonPhone] = useState('');
    const router = useRouter();

    const handleAddPatient = async () => {
        
     } 
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Dodaj pacjenta</Text>
                <Text>Imię: <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Podaj imię"
                    keyboardType="default" />
                </Text>
                <Text>Nazwisko: <TextInput
                    style={styles.input}
                    onChangeText={setSurname}
                    value={surname}
                    placeholder="Podaj nazwisko"
                    keyboardType="default" />
                </Text>
                <Text>Telefon: <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Podaj numer telefonu"
                    keyboardType="phone-pad" />
                </Text>
                <Text>Adres:</Text>
                <Text>Kod pocztowy: <TextInput
                    style={styles.input}
                    onChangeText={setZipcode}
                    value={zipcode}
                    placeholder="Podaj kod pocztowy"
                    keyboardType="number-pad" />
                </Text>
                <Text>Miejscowość: <TextInput
                    style={styles.input}
                    onChangeText={setCity}
                    value={city}
                    placeholder="Podaj miejscowość"
                    keyboardType="default" />
                </Text>
                <Text>Ulica: <TextInput
                    style={styles.input}
                    onChangeText={setStreet}
                    value={street}
                    placeholder="Podaj ulicę"
                    keyboardType="default" />
                </Text>
                <Text>X Zaznacz jeśli Pacjent nie jest osobą kontaktową</Text>
                <Text>Osoba kontaktowa</Text>
                <Text>Imię: <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonName}
                                    value={contactPersonName}
                                    placeholder="Podaj imię osoby kontaktowej"
                                    keyboardType="default" />
                                </Text>
                                <Text>Nazwisko: <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonSurname}
                                    value={contactPersonSurname}
                                    placeholder="Podaj nazwisko osoby kontaktowej"
                                    keyboardType="default" />
                                </Text>
                                <Text>Telefon: <TextInput
                                    style={styles.input}
                                    onChangeText={setContactPersonPhone}
                                    value={contactPersonPhone}
                                    placeholder="Podaj numer telefonu osoby kontaktowej"
                                    keyboardType="phone-pad" />
            </Text>
            
                <Button
                    title={'Zapisz'}
                    onPress={handleAddPatient}/>
                <Button
                    title={'Wróć'}
                    onPress={() => router.back()}/>
          </View>
          </ScrollView>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    gap: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '700',
    color: '#333',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: 'flex-end',
  },
})