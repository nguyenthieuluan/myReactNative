import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Item = props => (
  <TouchableOpacity>
    <View style={styles.listItemContainer}>
      <Icon style={styles.walletIcon} name="ios-bus" size={40} color="#01a699" />
      {/*<Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />*/}
      <View style={styles.listItem}>
        <Text style={styles.nameWallet}>Move</Text>
        <Text style={styles.balanceWallet}>note</Text>
      </View>
      <View>
        <Text>5000 VND</Text>
      </View>
    </View>
    <View style={styles.listItemContainer}>
      <Icon style={styles.walletIcon} name="ios-cart" size={40} color="#01a699" />
      {/*<Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />*/}
      <View style={styles.listItem}>
        <Text style={styles.nameWallet}>Shopping</Text>
        <Text style={styles.balanceWallet}>no note</Text>
      </View>
      <View>
        <Text>9000 VND</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  listItem: {
    flex: 1,
    flexDirection: "column",
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  },
  nameWallet: {
    width: "100%"
  },
  balanceWallet: {
    width: "100%"
  },
  walletIcon: {
    marginRight: 10
  }
});

export default Item;
