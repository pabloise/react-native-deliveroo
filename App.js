import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen options={{headerShown: false}} name='RestaurantScreen' component={RestaurantScreen}/>
          <Stack.Screen options={{headerShown: false, presentation:'modal'}} name='Basket' component={BasketScreen}/>
        </Stack.Navigator>
        </Provider>
    </NavigationContainer>
  )
}

export default App;
