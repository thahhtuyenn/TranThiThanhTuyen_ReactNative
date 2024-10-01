import { NavigationContainer } from "@react-navigation/native";
import { StartScreen } from "../pages/StartScreen.js";

import { createStackNavigator } from "@react-navigation/stack";
import { ProductScreen01 } from "../pages/ProductScreen01.js";
import { ProductScreen02 } from "../pages/ProductScreen02.js";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="ProductScreen01" component={ProductScreen01} />
        <Stack.Screen name="ProductScreen02" component={ProductScreen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
