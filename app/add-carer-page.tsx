import AdditionalCarerOptionsForm from "@/components/AdditionalCarerOptionsForm";
import AdresForm from "@/components/AdresForm";
import EmailForm from "@/components/EmailForm";
import NameForm from "@/components/NameForm";
import { FormContext } from "@/store/FormContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddCarerScreen() {
  const router = useRouter();

  const { formData } = useContext(FormContext);

  const handleAddCarer = async () => {
    const carerData = {
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      zipcode: formData.zipcode,
      street: formData.street,
      isOwes: formData.isOwes,
      typeOfContract: formData.typeOfContract,
      workingTime: formData.workingTime,
      houseNumber: formData.houseNumber,
      flatNumber: formData.flatNumber,
    };

    console.log("Dane opiekuna:", carerData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Dodaj opiekuna</Text>
          <NameForm />
          <EmailForm />
          <AdresForm />
          <AdditionalCarerOptionsForm />
          <View style={styles.buttonContainer}>
            <Button title={"Zapisz"} onPress={handleAddCarer} />
            <Button title={"Wróć"} onPress={() => router.back()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "700",
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 15,
  },
  buttonContainer: {
    gap: 20,
    marginVertical: 20,
  },
});
