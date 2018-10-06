import React, {Component} from 'react'
import {Navigation} from 'react-native-navigation';
import {Text, View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
    ]).then(sourcer => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "FindPlace",
          icon: sourcer[0],
          title: "FindPlace"
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "SharePlace",
          icon: sourcer[1],
          title: "SharePlace"
        }
      ]
    });
    }
  );
};

export default startTabs;


// class MainTabs extends Component{
//   render() {
//     return (
//       <View>
//         <Text>This is second screen</Text>
//       </View>
//     )
//   }
// };
// export default MainTabs;
