import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

//config
import Colors from "../config/Colors";

export default function AppLoading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={Colors.blacky} />
    </View>
  );
}
