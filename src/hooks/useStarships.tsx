import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-paper";

import { Item } from "../components/Item";

async function fetchData() {
  const result = await fetch("https://swapi.py4e.com/api/starships/");
  const json = await result.json();
  return json;
}

export function useStarships(props) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["starships"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        style={styles.container}
        data={data.results}
        renderItem={({ item }) => (
          <Item
            props={{
              name: item.name,
              model: item.model,
              crew: item.crew,
              hyperdriveRating: item.hyperdrive_rating,
              costInCredits: item.cost_in_credits,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
