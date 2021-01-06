import 'react-native-gesture-handler';
import * as React from 'react';
import { I18nManager, StatusBar } from 'react-native';
const {Provider} = require('react-redux');
I18nManager.allowRTL(false);
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/store/configureStore';
const store = configureStore();
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import {Screens} from './src/utils/enums'


const Stack = createStackNavigator();
StatusBar.setHidden(true)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={Screens.FIRST_SCREEN} component={FirstScreen} />
          <Stack.Screen name={Screens.SECOND_SCREEN} component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;