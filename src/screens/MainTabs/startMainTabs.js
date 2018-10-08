import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
    ]).then(sourcers => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "FindPlace",
          icon: sourcers[0],
          title: "FindPlace",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[2],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "SharePlace",
          icon: sourcers[1],
          title: "SharePlace",
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcers[2],
                title: "menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
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


