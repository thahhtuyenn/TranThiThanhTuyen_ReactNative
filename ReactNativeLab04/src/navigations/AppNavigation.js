import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "../views/ProductScreen";
import ChooseColorScreen from "../views/ChooseColorScreen";
// nos bao loi ro rang the ma
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="ChooseColor" component={ChooseColorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
