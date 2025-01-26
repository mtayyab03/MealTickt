import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
//config
import Colors from "../config/Colors";

// Define Props Interface
interface ScreenProps {
  children: any; // Accepts React child nodes (components, text, etc.)
  statusBarColor?: string; // Optional status bar background color
  style?: any; // Optional custom styles for the SafeAreaView
}

const Screen: React.FC<ScreenProps> = ({
  children,
  statusBarColor = Colors.white,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? (
        <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
      ) : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
