import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../pages/StartScreen";
import { MasterPortrait } from "../pages/MasterPortrait";

const Stack = createStackNavigator();
export const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="MasterPortrait" component={MasterPortrait} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}