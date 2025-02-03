import { useRouter } from "expo-router";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { TCarer } from "./(tabs)";

export default function SearchCarerScreen() {
  const [carers, setCarers] = useState<TCarer[]>([]);
  const [filteredCarers, setFilteredCarers] = useState<TCarer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchCarers = async () => {
      try {
        const carersData = require("../assets/testDataCarer.json");
        setCarers(carersData);
        setFilteredCarers(carersData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych opiekunów", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarers();
  }, []);

  const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterCarers = (query: string) => {
    const normalizedQuery = normalizeText(query.toLowerCase());
    const filtered = carers.filter((carer) =>
      normalizeText(`${carer.name} ${carer.surname}`)
        .toLowerCase()
        .includes(normalizedQuery)
    );
    setFilteredCarers(filtered);
  };

  const sortedCarers = carers.sort((a, b) => {
    const nameA = a.surname.toLowerCase();
    const nameB = b.surname.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // const handleClear = () => {
  //   setSearchQuery("");
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Wyszukaj opiekuna</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Szukaj po imieniu lub nazwisku"
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              filterCarers(text);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* <Button title={"Wyczyść"} onPress={handleClear} /> */}
          <Button title={"Wróć"} onPress={() => router.back()} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Lista opiekunów</Text>

          {loading ? (
            <Text>Ładowanie...</Text>
          ) : (
            <View style={styles.listContainer}>
              <FlatList
                data={filteredCarers}
                keyExtractor={(user) => user.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.carerItem}
                    onPress={() => router.push(`/details/carer?id=${item.id}`)}
                  >
                    <Text
                      style={styles.carerName}
                    >{`${item.surname} ${item.name}`}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
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
    marginTop: 20,
    fontSize: 24,
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "700",
    color: "#333",
  },
  listContainer: {
    width: "100%",
    paddingBottom: 60,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  carerItem: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "darkgray",
    width: "100%",
  },
  carerName: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 500,
  },
  buttonContainer: {
    gap: 20,
    alignItems: "center",
  },
});
