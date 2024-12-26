import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AppButton({ title, buttonColor }) {
  return (
    <View
      style={{
        width: "90%",
        height: RFPercentage(6.5),
        borderRadius: RFPercentage(1),
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
    color: Colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.semiBold,
  },
});
