import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Item extends Component {
  render() {
    let status = '';
    if (this.props.statusEmployee === 'active') {
      status = (
        <TouchableHighlight style={styles.circle}>
          <Text>haasdf</Text>
        </TouchableHighlight>
      )
    }
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
      <View style={styles.listItemContainer}>
        <Icon name="md-bookmarks" style={styles.walletIcon} size={40} color="#01a699" />
        <View style={styles.listItem}>
          <Text style={styles.nameWallet}>{this.props.nameEmployee}</Text>
          {status}
        </View>
      </View>
    </TouchableOpacity>
    )
  }
}

export default Item;

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
  nameWallet: {
    width: "100%"
  },
  balanceWallet: {
    width: "100%"
  },
  walletIcon: {
    marginRight: 10
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    color: "#93E825"
  }

});


