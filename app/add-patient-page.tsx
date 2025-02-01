import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddPatientScreen() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handleAddPatient = async () => {
        
     } 
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.label}>Dodaj pacjenta</Text>
                <Text>Imię: <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Wpisz imię"
                    keyboardType="default" />
                </Text>
                <Text>Nazwisko: <TextInput
                    style={styles.input}
                    onChangeText={setSurname}
                    value={surname}
                    placeholder="Wpisz nazwisko"
                    keyboardType="default" />
                </Text>
                <Text>Telefon: <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Wpisz numer telefonu"
                    keyboardType="phone-pad" />
                </Text>
                <Button
                    title={'Zapisz'}
                    onPress={handleAddPatient}/>
                <Button
                    title={'Wróć'}
                    onPress={() => router.back()}/>
            </View>
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