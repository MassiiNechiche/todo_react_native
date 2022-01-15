import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Highlight() {
  return (
    <View>
      <LinearGradient
        colors={["#55bbf6", "#55a8f6", "#5b77f1"]}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.content}
      >
        <Icon
          name="angle-double-up"
          size={30}
          color="#f1f4f7"
          style={styles.check}
        />

        <Text style={styles.title}>Highlight</Text>
        <View style={styles.status}>
          <Text style={styles.numbers}>
            <Icon name="bell-o" size={30} color="#f1f4f7" style={styles.bell} />
            {"  "}3 Todos
          </Text>
        </View>
        <Icon name="500px" size={30} color="#f1f4f7" style={styles.high} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  numbers: {
    marginTop: 20,
    color: "white",
    fontSize: 20,
  },
  high: {
    fontSize: 160,
    position: "absolute",
    right: -40,
    top: 20,
    color: "#6b79fa",
  },
  check: {
    fontSize: 300,
    position: "absolute",
    left: -90,
    top: -50,
    color: "#6bbafa5e",
  },
  bell: {
    marginRight: 20,
    fontSize: 20,
  },
});
