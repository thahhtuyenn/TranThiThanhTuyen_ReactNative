import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../pages/StartScreen";
import { ListTodoScreen } from "../pages/ListTodoScreen";
import { AddToDo, AddToDoScreen } from "../pages/AddToDoScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="ListTodoScreen" component={ListTodoScreen} />
        <Stack.Screen name="AddToDoScreen" component={AddToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
