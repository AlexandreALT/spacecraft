import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../screens/LoginScreen";
import { StarshipDetailScreen } from "../screens/StarshipDetailScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { TermsScreen } from "../screens/TermsScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Starships"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Starships" component={StarshipFeedScreen} />
        <Stack.Screen name="Starship" component={StarshipDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
