import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SearchField({ title, icon, value, onChangeText }) {
  return (
    <View style={styles.searchmain}>
      <Feather name={icon} size={24} color={Colors.black50} />
      <TextInput
        style={styles.inputtext}
        onChangeText={onChangeText}
        value={value}
        placeholder={title}
        placeholderTextColor={Colors.black50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchmain: {
    width: "90%",
    backgroundColor: Colors.fieldcolor,
    borderRadius: RFPercentage(1.5),
    borderColor: Colors.stroke,
    height: RFPercentage(5),
    marginTop: RFPercentage(2),
    flexDirection: "row",
    alignItems: "center",
  },

  inputtext: {
    fontSize: RFPercentage(1.6),
    color: Colors.black50,
    fontFamily: FontFamily.regular,
    marginLeft: RFPercentage(1),
  },
});
