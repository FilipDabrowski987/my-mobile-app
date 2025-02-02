import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TCarer } from "../(tabs)";
import { Button, StyleSheet, Text, View } from "react-native";
import carersData from "../../assets/testDataCarer.json";

export default function DetailsCarerScreen() {
  const { id } = useLocalSearchParams();
  const [carer, setCarer] = useState<TCarer | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const foundCarer = carersData.find((c) => c.id.toString() === id);
      setCarer(foundCarer || null);
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opiekun nr {id} </Text>
      {carer ? (
        <View>
          <View>
            <Text>Imię: {carer.name}</Text>
            <Text>Nazwisko: {carer.surname}</Text>
            <Text>Telefon: {carer.phone}</Text>
            <Text>ID: {carer.id}</Text>
          </View>
          <View style={styles.actionButtonsContainer}>
            <Button title={"Jakieś"} onPress={() => router.back()} />
            <Button title={"Przyciski"} onPress={() => router.back()} />
            <Button title={"Do"} onPress={() => router.back()} />
            <Button title={"Robienia"} onPress={() => router.back()} />
            <Button title={"Różnych"} onPress={() => router.back()} />
            <Button title={"Rzeczy"} onPress={() => router.back()} />
            <Button title={"Zależy"} onPress={() => router.back()} />
            <Button title={"Co"} onPress={() => router.back()} />
            <Button title={"Będzie"} onPress={() => router.back()} />
            <Button title={"Potrzebne"} onPress={() => router.back()} />
          </View>
        </View>
      ) : (
        <Text>Ładowanie...</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title={"Wróć"} onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    gap: 20,
  },
  header: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "700",
    color: "#333",
  },
  buttonContainer: {
    gap: 20,
    alignItems: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Umożliwia zawijanie przycisków do nowej linii
    justifyContent: "center", // Opcjonalnie: można zmienić na "flex-start" lub "space-between"
    gap: 10,
    width: "100%", // Opcjonalnie: można dostosować szerokość
    paddingHorizontal: 10,
  },
});
