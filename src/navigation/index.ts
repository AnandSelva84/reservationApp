import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../features/home/components';
import CreateReservation from '../features/create-reservation/components';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  CreateReservation: { screen: CreateReservation },
}, {
    initialRouteName: "Home"
  });

const MainApp = createAppContainer(MainNavigator);

export default MainApp;