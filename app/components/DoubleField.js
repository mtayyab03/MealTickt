import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function DoubleField({
  ftitle,
  ltitle,
  fvalue,
  lvalue,
  onChangeF,
  onChangeL,
}) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.doublefield}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeF}
          value={fvalue}
          placeholder={ftitle}
          placeholderTextColor={Colors.placeholder}
        />
      </View>
      <View style={styles.doublefield}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeL}
          value={lvalue}
          placeholder={ltitle}
          placeholderTextColor={Colors.placeholder}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  doublefield: {
    width: "48%",
    height: RFPercentage(6),
    backgroundColor: Colors.ligthBlack,

    borderColor: Colors.primary,
    color: Colors.white,
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
  input: { fontFamily: FontFamily.regular, color: Colors.lightWhite },
});
