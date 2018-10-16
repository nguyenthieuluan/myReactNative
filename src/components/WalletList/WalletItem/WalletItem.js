import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const walletItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItemContainer}>
      <View style={styles.listItem}>
        <Text style={styles.nameWallet}>{props.userName}</Text>
        <Text style={styles.balanceWallet}>{props.password}</Text>
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

export default walletItem;
