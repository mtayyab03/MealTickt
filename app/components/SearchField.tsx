import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

type FeatherIconNames = keyof typeof Feather.glyphMap;

// Define Props Interface
interface SearchFieldProps {
  title: string; // Placeholder text for the TextInput
  icon: FeatherIconNames; // Valid Feather icon name
  value: string; // Current value of the TextInput
  onChangeText: (text: string) => void; // Callback when text changes
}

const SearchField: React.FC<SearchFieldProps> = ({
  title,
  icon,
  value,
  onChangeText,
}) => {
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
};
export default SearchField;

const styles = StyleSheet.create({
  searchmain: {
    width: "90%",
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
