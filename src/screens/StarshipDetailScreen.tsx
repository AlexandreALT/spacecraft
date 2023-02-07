import { View, StyleSheet, Image, Text } from "react-native";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { useImage } from "../hooks/useImage";

export const StarshipDetailScreen = ({ route }) => {
  const starship = route.params.props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button onPress={() => navigation.goBack()} style={styles.back}>
          <Text style={{ color: "black" }}>X</Text>
        </Button>
        <Text style={styles.class}>{starship.model}</Text>
      </View>
      <Image source={useImage(starship.name)} style={{ width: "100%" }} />

      <View style={styles.content}>
        <Text style={styles.title}>{starship.name}</Text>
        <Text style={styles.subtitle}>{starship.manufacturer}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.info}>
          <Image
            source={require("../../assets/icons/fusee.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>{starship.hyperdrive_rating}</Text>
        </View>

        <View style={styles.info}>
          <Image
            source={require("../../assets/icons/vitesse.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>{starship.max_atmosphering_speed}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.stat}>
          <Text>Crew</Text>
          <Text style={styles.text}>{starship.crew}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Passengers</Text>
          <Text style={styles.text}>{starship.passengers}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Consumables</Text>
          <Text style={styles.text}>{starship.consumables}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Capacity</Text>
          <Text style={styles.text}>{starship.cargo_capacity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    position: "absolute",
    marginTop: Constants.statusBarHeight + 10,
    marginLeft: 10,
    zIndex: 3,
  },
  back: {
    backgroundColor: "white",
    padding: 0,
  },
  class: {
    color: "white",
    fontSize: 14,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
  content: {
    marginTop: 25,
    alignItems: "center",
  },
  stat: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    width: 25,
    height: 25,
  },
  info: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
