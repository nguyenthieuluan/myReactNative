import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-home", 30),
    Icon.getImageSource("md-wallet", 30),
    Icon.getImageSource("ios-remove-circle-outline", 30),
    Icon.getImageSource("ios-add-circle-outline", 30),
    Icon.getImageSource("ios-menu", 30),
    Icon.getImageSource("ios-return-left-outline", 30)
    ]).then(sourcers => {
    Navigation.startTabBasedApp({
      tabs: [
        // Home Screen
        {
          screen: "awesome-places.Summary",
          label: "Home",
          icon: sourcers[0],
          title: "Home",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[6],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },

        // Wallet
        {
          screen: "awesome-places.Wallet",
          label: "Wallet",
          icon: sourcers[1],
          title: "Wallet",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[6],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },

        // Spent
        {
          screen: "awesome-places.Spent",
          label: "Spent",
          icon: sourcers[2],
          title: "Spent",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[6],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },

        // Income
        {
          screen: "awesome-places.Income",
          label: "Income",
          icon: sourcers[3],
          title: "Income",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[6],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],

      // Drawer
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      }
    });
    }
  );
};

export default startTabs;


