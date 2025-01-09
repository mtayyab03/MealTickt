import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import OnboardingThree from "../screens/OnboardingThree";
import OnboardingFour from "../screens/OnboardingFour";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName={"OnBoardingThree"}
    >
      {/* login */}

      <Stack.Screen
        options={{ headerShown: false }}
        name="OnboardingThree"
        component={OnboardingThree}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OnboardingFour"
        component={OnboardingFour}
      />
    </Stack.Navigator>
  );
}
