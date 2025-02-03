import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type TCarer = {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  adres: {
    zipcode: string;
    city: string;
    street: string;
    houseNumber: string;
    flatNumber: string;
  };
  OWES: string;
  typeOfContract: string;
  workingTime: string;
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Ekran główny</Text>
        <Button
          title={"Wyszukaj..."}
          onPress={() => router.push("/search-page")}
        />
        <Button title={"Dodaj..."} onPress={() => router.push("/add-page")} />
        <Button title={"Wyloguj"} onPress={() => router.push("/")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "lightgray",
    gap: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    // marginBottom: 10,
    fontWeight: "700",
    color: "#333",
  },
});
