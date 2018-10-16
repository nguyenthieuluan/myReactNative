import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import configureStore from './src/store/configureStore';
import Summary from "./src/screens/Summary/Summary";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer, store, Provider);
Navigation.registerComponent("awesome-places.Summary", () => Summary, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login",
  }
});