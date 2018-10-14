import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import configureStore from './src/store/configureStore';
import WalletDetailScreen from './src/screens/WalletDetail/WalletDetail';
import Wallet from "./src/screens/Wallet/Wallet";
import Summary from "./src/screens/Summary/Summary";
import Spent from "./src/screens/Spent/Spent";
import Income from "./src/screens/Income/Income";
import AddWallet from "./src/screens/Wallet/layout/AddWallet";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.WalletDetailScreen", () => WalletDetailScreen, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer, store, Provider);
Navigation.registerComponent("awesome-places.Wallet", () => Wallet, store, Provider);
Navigation.registerComponent("awesome-places.AddWallet", () => AddWallet, store, Provider);
Navigation.registerComponent("awesome-places.Summary", () => Summary, store, Provider);
Navigation.registerComponent("awesome-places.Spent", () => Spent, store, Provider);
Navigation.registerComponent("awesome-places.Income", () => Income, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login",
  }
});