import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component{
  render() {
    return (
      <View style={[styles.container, {width: Dimensions.get("window").width*0.7}]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon name="ios-log-out" size={30} style={styles.drawerIcon}/>
            <Text>
              SideDrawer
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerIcon: {
    marginRight: 10
  }
});
export default SideDrawer;