import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const expenseIncomeItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItemContainer}>
      <Icon style={styles.walletIcon} name="ios-arrow-dropup" size={40} color="#01a699" />
      {/*<Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />*/}
      <View style={styles.listItem}>
        <Text style={styles.nameWallet}>{props.category}</Text>
        <Text style={styles.balanceWallet}>{props.note}</Text>
      </View>
      <View>
        <Text style={styles.textDate}>{props.date}</Text>
      </View>
      <View>
        <Text>{props.expenseAmount} VND</Text>
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
  },
  textDate: {
    marginRight: 30
  }
});

export default expenseIncomeItem;
