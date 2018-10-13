import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  onLogOut = () => {
    //this.props.navigation('awesome-places.AuthScreen');
    this.props.navigator.push({
      screen: "awesome-places.AuthScreen",
      title: 'logout',
      passProps: {
      }
    })
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity onPress={this.onLogOut}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="md-albums"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Budgets</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="md-settings"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default SideDrawer;
