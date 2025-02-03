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

  const formatPhoneNumber = (phoneNumber: string) => {
    const prefix = phoneNumber.slice(0, 4); // Pierwsze 4 znaki to +48
    const numberPart = phoneNumber.slice(4); // Reszta numeru
    const formattedNumber = `${prefix}${numberPart.slice(
      0,
      3
    )} ${numberPart.slice(3, 6)} ${numberPart.slice(6, 9)}`;
    return formattedNumber;
  };

  const renderAddress = (adres: TCarer["adres"]) => {
    if (adres.city && adres.houseNumber) {
      if (adres.street && adres.flatNumber) {
        return `ul. ${adres.street} ${adres.houseNumber} m.${adres.flatNumber}\n${adres.zipcode} ${adres.city}`;
      } else if (adres.street) {
        return `ul. ${adres.street} ${adres.houseNumber}\n${adres.zipcode} ${adres.city}`;
      }
      return `${adres.zipcode} ${adres.city} ${adres.houseNumber}`;
    }
    return "Brak pełnych danych adresowych";
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
              <Text style={styles.phone}>{formatPhoneNumber(carer.phone)}</Text>
              <View>
                <Button title="Zadzwoń" onPress={() => makeCall(carer.phone)} />
                {/*trzeba nadać uprawnienia */}
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.details}>{renderAddress(carer.adres)}</Text>
              <Text style={styles.details}>{carer.email}</Text>
              <Text style={styles.details}>
                Zatrudnienie z OWES: {carer.OWES}
              </Text>
              <Text style={styles.details}>
                Rodzaj zatrudnienia: {carer.typeOfContract}
              </Text>
              <Text style={styles.details}>
                Wymiar czasu pracy: {carer.workingTime}
              </Text>
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
  detailsContainer: {
    gap: 10,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
  },
  details: {
    fontSize: 16,
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
