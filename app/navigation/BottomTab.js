import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Fontisto,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

//screens
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";

//config
import Colors from "../config/Colors";

const Tab = createBottomTabNavigator();
const SearchScreen = () => {
  return null; // Return null for an empty screen
};
const ProfileScreen = () => {
  return null; // Return null for an empty screen
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
        headerShown: false,
        tabBarStyle: {
          height: wp("18%"),
          padding: 5,
          paddingBottom: RFPercentage(2),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.blacky,
        },
        tabBarLabelStyle: { display: "none" },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Reels",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    backgroundColor: Colors.third,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
