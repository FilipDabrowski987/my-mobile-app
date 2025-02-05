import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TContactPerson, TPatient } from "../../(tabs)";
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import patientsData from "../../../assets/testDataPatient.json";

export default function DetailsPatientScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [patient, setPatient] = useState<TPatient | null>(null);
  // const [contactPerson, setContactPerson] = useState<TContactPerson | null>(
  //   null
  // );
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const foundPatient = patientsData.find((p) => p.id.toString() === id);
      setPatient(foundPatient || null);
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

  const renderAddress = (adres: TPatient["adres"]) => {
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Informacje o podopiecznym </Text>
        {patient ? (
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {patient.name} {patient.surname}
              </Text>
              {!patient.contactPersons ||
              patient.contactPersons.length === 0 ? (
                <View style={styles.phoneContainer}>
                  <Text style={styles.phone}>
                    {formatPhoneNumber(patient.phone)}
                  </Text>
                  <View>
                    <Button
                      title="Zadzwoń"
                      onPress={() => makeCall(patient.phone)}
                    />
                  </View>
                </View>
              ) : (
                <Text style={styles.alert}>
                  Podopieczny nie jest osobą kontaktową
                </Text>
              )}
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>
                  {renderAddress(patient.adres)}
                </Text>
                <Text style={styles.details}>
                  Stopień niepełnosprawności: {patient.degreeOfDisability}
                </Text>
                <Text style={styles.details}>
                  Osoba leżąca: {patient.isLyingDownPerson}
                </Text>

                {patient.contactPersons &&
                  patient.contactPersons.length > 0 && (
                    <View style={styles.contactPersonContainer}>
                      <Text style={styles.contactPersonHeader}>
                        {patient.contactPersons.length === 1
                          ? "Osoba kontaktowa"
                          : "Osoby kontaktowe"}
                      </Text>
                      {patient.contactPersons.map((contactPerson, index) => (
                        <View key={index} style={styles.nameContainer}>
                          <Text style={styles.name}>
                            {contactPerson.name} {contactPerson.surname}
                          </Text>
                          <View style={styles.phoneContainer}>
                            <Text style={styles.phone}>
                              {formatPhoneNumber(contactPerson.phone)}
                            </Text>
                            <View>
                              <Button
                                title="Zadzwoń"
                                onPress={() => makeCall(contactPerson.phone)}
                              />
                              {/* Trzeba nadać uprawnienia */}
                            </View>
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                {patient.text && (
                  <Text style={styles.details}>
                    Informacje dodatkowe: {patient.text}
                  </Text>
                )}
              </View>
            </View>
          </View>
        ) : (
          <Text>Ładowanie...</Text>
        )}
        <View style={styles.buttonContainer}>
          <Button title={"Wróć"} onPress={() => router.back()} />
        </View>
        {patient && <Text>ID: {patient.id}</Text>}
      </View>
    </ScrollView>
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
  contactPersonContainer: {
    marginTop: 20,
  },
  contactPersonHeader: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    alignItems: "center",
    color: "#333",
  },
  alert: {
    color: "red",
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
