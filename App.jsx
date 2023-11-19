
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import WelcomeScreen from "./screens/WelcomeScreen";
import FormScreen from "./screens/FormScreen";
import FoodSplitScreen from "./screens/FoodSplitScreen"
import BillScreen from "./screens/BillScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="WelcomeScreen">
        {/*change headerShown to false to remove top of screen*/}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodSplitScreen"
          component={FoodSplitScreen}
        />
      <Stack.Screen
          name="BillScreen"
          component={BillScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
