import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator intialRouteName="WelcomeScreen">
      {/*change headerShown to false to remove top of screen*/}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
