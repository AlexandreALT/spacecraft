import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 3,
      },
      headerText: {
        color: 'white',
        fontSize: 30,
      },
});