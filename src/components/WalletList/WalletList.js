import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./WalletItem/WalletItem";

const walletList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.users}
      renderItem={(info) => (
        <ListItem
          userName={info.item.userName}
          password={info.item.password}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default walletList;
