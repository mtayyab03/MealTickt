import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AppButton({ title, buttonColor }) {
  return (
    <View
      style={{
        width: "90%",
        height: RFPercentage(5.7),
        borderRadius: RFPercentage(2),
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFPercentage(2),
        backgroundColor: buttonColor,
      }}
    >
      <Text style={styles.buttontext}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttontext: {
    color: Colors.black32,
    fontSize: RFPercentage(1.7),
    fontFamily: FontFamily.bold,
    marginBottom: RFPercentage(0.4),
  },
});
