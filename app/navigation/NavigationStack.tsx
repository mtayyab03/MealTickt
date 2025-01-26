import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import OnboardingThree from "../screens/OnboardingThree";
import OnboardingFour from "../screens/OnboardingFour";

// Define types for Stack Navigation
type RootStackParamList = {
  OnboardingThree: undefined; // No params for OnboardingThree screen
  OnboardingFour: undefined; // No params for OnboardingFour screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingThree" // Corrected to match the screen name
      screenOptions={{ headerShown: false }} // Hides header globally
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
};
export default NavigationStack;
