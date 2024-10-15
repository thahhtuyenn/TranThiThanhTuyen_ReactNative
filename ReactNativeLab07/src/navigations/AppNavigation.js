import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../pages/StartScreen";
import { MasterPortrait } from "../pages/MasterPortrait";
import { DetailPortrait } from "../pages/DetailPortrait";

const Stack = createStackNavigator();
export const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: {flex: 1} }}>
                {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
                <Stack.Screen name="MasterPortrait" component={MasterPortrait} />
                <Stack.Screen name="DetailPortrait" component={DetailPortrait} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}