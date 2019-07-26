import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import CreateReservation from './screens/CreateReservation';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  CreateReservation: { screen: CreateReservation },
}, {
    initialRouteName: "Home"
  });

const MainApp = createAppContainer(MainNavigator);

export default MainApp;