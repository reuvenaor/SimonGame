import 'react-native-gesture-handler';
import * as React from 'react';
import { I18nManager, StatusBar, BackHandler } from 'react-native';
const { Provider } = require('react-redux');
I18nManager.allowRTL(false);
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/store/configureStore';
const store = configureStore();
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import Modal from './src/screens/Modal';
import { Screens } from './src/utils/enums';

const Stack = createStackNavigator();
const GameStack = createStackNavigator();

function GameStackScreens() {
  return (
    <GameStack.Navigator headerMode="none" >
      <GameStack.Screen name={Screens.FIRST_SCREEN} component={FirstScreen} />
      <GameStack.Screen name={Screens.SECOND_SCREEN} component={SecondScreen} />
    </GameStack.Navigator>
  );
}

StatusBar.setHidden(true)


const screenOption = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}


function App() {

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOption} headerMode="none" mode='modal'>
          <Stack.Screen name={Screens.GAMES_SCREEN} component={GameStackScreens} />
          <Stack.Screen name={Screens.MODAL} component={Modal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;