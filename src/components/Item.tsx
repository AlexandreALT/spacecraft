import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import { useImage } from "../hooks/useImage";

export const Item = ({ props }: { props }) => {
  const navigation = useNavigation();

  return (
    <Card
      style={styles.container}
      onPress={() => navigation.navigate("Starship", { props: props })}
    >
      <Card.Cover source={useImage(props.name)} />
      <Card.Title title={props.name} subtitle={props.model} />
      <Card.Content>
        <Text>{props.crew}</Text>
        <Text>{props.hyperdrive_rating}</Text>
        <Text>{props.cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
