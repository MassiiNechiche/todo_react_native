import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#282c2e",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "#78abf8",
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    color: "#d7d7df",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#5596f6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
