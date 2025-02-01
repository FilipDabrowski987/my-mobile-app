import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddCareScreen() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handleAddCare = async () => {

     } 
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
          <Text style={styles.header}>Dodaj opiekuna</Text>
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
          </View>
          <View style={styles.buttonContainer}>
                <Button
                    title={'Zapisz'}
                    onPress={handleAddCare}/>
                <Button
                    title={'Wróć'}
              onPress={() => router.back()} />
          </View>
            </View>
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
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
  }
})