import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./WalletItem/WalletItem";

const walletList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          initialAccountBalance={info.item.initialAccountBalance}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
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
