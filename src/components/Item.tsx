import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { useImage } from "../hooks/useImage";

type ItemProps = {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
};

export const Item = ({ props }: { props: ItemProps }) => {
  return (
    <Card style={styles.container}>
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
