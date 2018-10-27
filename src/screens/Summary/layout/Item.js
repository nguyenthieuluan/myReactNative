import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions  } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class Item extends Component {
  render() {
    let status = null;
    if (this.props.statusEmployee === 'active') {
      status = (
        <TouchableOpacity style={styles.circle}>
          <Text style={{}}> </Text>
        </TouchableOpacity>
      )
    }
    let icon = (<Icon name="ios-person" style={styles.walletIcon} size={40} color="#01a699" />);
    if (this.props.nameEmployee.search('ti') !== -1 || this.props.nameEmployee.search('tri') !== -1 && this.props.nameEmployee.search('titri') === -1) {
      icon = <Icon name="md-woman" style={styles.walletIcon} size={40} color="#01a699" />
    }
    if (this.props.nameEmployee.search('titri') !== -1) {
      icon = <Icon name="md-heart" style={styles.walletIcon} size={40} color="#01a699" />
    }
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
      <View style={styles.listItemContainer}>
        {icon}
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
    width: Dimensions.get('window').width,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 5
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  nameWallet: {
    width: "90%",
    //marginLeft: 10
  },
  balanceWallet: {
    width: "100%"
  },
  walletIcon: {
    marginRight: 10
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#40ff02",
  }
});


