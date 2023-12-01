
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import WelcomeScreen from "./screens/WelcomeScreen";
import FormScreen from "./screens/FormScreen";
import FoodSplitScreen from "./screens/FoodSplitScreen"
import BillScreen from "./screens/BillScreen"
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Stack = createStackNavigator();

const App = () => {
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
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="BillScreen"
          component={BillScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
