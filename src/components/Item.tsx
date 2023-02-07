import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useImage } from "../hooks/useImage";

type ItemProps = {
  name: string;
  model: string;
  crew: string;
  hyperdriveRating: string;
  costInCredits: string;
};

export const Item = ({ props }: { props: ItemProps }) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.container}>
      <Card.Cover source={useImage(props.name)} />
      <Card.Title title={props.name} subtitle={props.model} />
      <Card.Content>
        <Text>{props.crew}</Text>
        <Text>{props.hyperdriveRating}</Text>
        <Text>{props.costInCredits}</Text>
      </Card.Content>
      <Button onPress={() => navigation.navigate("Starship")}>ok</Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
