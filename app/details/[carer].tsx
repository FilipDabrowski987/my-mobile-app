import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TCarer } from "../(tabs)";
import { Button, Linking, StyleSheet, Text, View } from "react-native";
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

  const makeCall = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Nie można dzwonić na ten numer.");
        }
      })
      .catch((err) => console.error("Błąd przy próbie dzwonienia", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informacje o opiekunie </Text>
      {carer ? (
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {carer.name} {carer.surname}
            </Text>
            <View style={styles.phoneContainer}>
              <Text style={styles.phone}>{carer.phone}</Text>
              <View>
                <Button title="Zadzwoń" onPress={() => makeCall(carer.phone)} />
                {/*trzeba nadać uprawnienia */}
              </View>
            </View>
          </View>

          <View style={styles.actionButtonsContainer}>
            <Button title={"Jakieś"} onPress={() => router.back()} />
            <Button title={"Przyciski"} onPress={() => router.back()} />
            <Button title={"Do"} onPress={() => router.back()} />
            <Button title={"Robienia"} onPress={() => router.back()} />
            <Button title={"Różnych"} onPress={() => router.back()} />
            <Button title={"Rzeczy,"} onPress={() => router.back()} />
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
      {carer && <Text>ID: {carer.id}</Text>}
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
  nameContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  name: {
    fontSize: 36,
    fontWeight: 700,
    color: "#333",
    marginVertical: 40,
  },
  phoneContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  phone: {
    fontSize: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 20,
    alignItems: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
});
