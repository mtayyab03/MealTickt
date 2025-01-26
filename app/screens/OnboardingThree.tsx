import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, AntDesign } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

// Types
interface Ingredient {
  id: number;
  name: string;
}

interface Day {
  id: number;
  name: string;
}

interface OnboardingThreeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const OnboardingThree: React.FC<OnboardingThreeProps> = ({ navigation }) => {
  const [menuid, setmenuid] = useState(1);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const selectIngredient: Ingredient[] = [
    {
      id: 1,
      name: "ingredient",
    },
    {
      id: 2,
      name: "servings",
    },
  ];

  // Array of allergens
  const allergens: string[] = [
    "milk",
    "eggs",
    "fish",
    "crustacean",
    "nuts",
    "wheat",
    "soyabeans",
    "none",
  ];

  const daysSelection: Day[] = [
    {
      id: 1,
      name: "mon",
    },
    {
      id: 2,
      name: "tue",
    },
    {
      id: 3,
      name: "wed",
    },
    {
      id: 4,
      name: "Thu",
    },
    {
      id: 5,
      name: "fri",
    },
    {
      id: 6,
      name: "sat",
    },
    {
      id: 7,
      name: "sun",
    },
  ];

  // Toggle selection of allergen
  const handleSelection = (allergen: string) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens((prev: any) =>
        prev.filter((item: any) => item !== allergen)
      ); // Remove from selection
    } else {
      setSelectedAllergens((prev) => [...prev, allergen]); // Add to selection
    }
  };

  // Toggle selection of a day
  const handleDaySelection = (dayId: number) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays((prev) => prev.filter((id) => id !== dayId)); // Deselect the day
    } else {
      setSelectedDays((prev) => [...prev, dayId]); // Select the day
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContaier}>
        <Image style={styles.logo} source={icons.mealticktlogo} />
      </View>

      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <Text style={styles.stepText}>step 3/5</Text>

      <Text style={styles.title}>almost there...</Text>

      <View style={styles.textContainer}>
        <Text style={styles.allergicTitle}>
          your personalized diet plan in no time. takes less than 1 minute to
          start!
        </Text>
      </View>

      <View style={styles.container90}>
        <Text style={styles.allergenTitlemain}>
          any allergies we should know about
        </Text>
      </View>

      {/* allergic selection */}
      <View style={styles.allergenmainContainer}>
        {allergens.map((allergen, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => handleSelection(allergen)}
            style={[
              styles.allergenButton,
              {
                backgroundColor: selectedAllergens.includes(allergen)
                  ? Colors.mildyellow
                  : "transparent", // Change background color
              },
            ]}
          >
            <Text style={styles.allergenText}>{allergen}</Text>
            {selectedAllergens.includes(allergen) && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelection(allergen)}
              >
                <AntDesign
                  style={styles.circleicon}
                  name="closecircleo"
                  size={14}
                  color={Colors.blacky}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* radio */}

      <View style={styles.radioTitle}>
        <Text style={styles.ingredientTitle}>ingredient measurement</Text>

        {/* igredient */}
        <View style={styles.radioContainner}>
          {selectIngredient.map((item) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setmenuid(item.id);
              }}
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: item.id === 2 ? RFPercentage(2) : null,
              }}
            >
              <View style={styles.radioButtonOuter}>
                {menuid === item.id ? (
                  <View style={styles.radioButtonInner} />
                ) : null}
              </View>
              <Text style={styles.ingredientText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.dietContainer}>
        <Text style={styles.dietText}>
          do you want to skip any diet any days?
        </Text>

        <Feather name="alert-circle" size={24} color={Colors.blacky} />
      </View>

      {/* Days Selection */}
      <View style={styles.daysContainer}>
        {daysSelection.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => handleDaySelection(item.id)}
            style={[
              styles.daysButton,
              {
                backgroundColor: selectedDays.includes(item.id)
                  ? Colors.mildyellow
                  : "transparent",
              },
            ]}
          >
            <Text style={styles.daysText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("OnboardingFour")}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="next" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </Screen>
  );
};

export default OnboardingThree;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgoudColor,
  },
  logo: {
    width: RFPercentage(10),
    height: RFPercentage(2),
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
  logoContaier: { width: "90%", marginTop: RFPercentage(1) },
  progressBar: {
    width: "60%",
    backgroundColor: Colors.mildyellow,
    height: RFPercentage(0.5),
    borderRadius: RFPercentage(2),
    marginTop: RFPercentage(4),
  },
  progress: {
    width: "30%",
    backgroundColor: Colors.darkMildYellow,
    height: RFPercentage(0.5),
    borderRadius: RFPercentage(2),
  },
  stepText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.3),
    color: Colors.black50,
    marginTop: RFPercentage(1.8),
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(2.8),
    color: Colors.black32,
    marginTop: RFPercentage(4),
  },
  textContainer: { width: "90%" },
  allergicTitle: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
    marginTop: RFPercentage(3),
  },
  daysText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.5),
    color: Colors.black50,
  },
  daysContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: RFPercentage(1.5),
  },
  daysButton: {
    width: RFPercentage(5.3),
    height: RFPercentage(6),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: RFPercentage(1),
    flexDirection: "row",
    marginRight: RFPercentage(0.8),
  },
  dietText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
  },
  dietContainer: {
    width: "90%",
    marginTop: RFPercentage(4),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ingredientText: {
    marginLeft: RFPercentage(0.5),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.5),
  },
  allergenText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.5),
    color: Colors.black50,
  },
  allergenButton: {
    paddingHorizontal: RFPercentage(3),
    paddingVertical: RFPercentage(1.5),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    marginTop: RFPercentage(1.2),
    borderRadius: RFPercentage(3),
    flexDirection: "row",
    marginRight: RFPercentage(1.2),
  },
  allergenmainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    flexWrap: "wrap",
    marginTop: RFPercentage(1),
  },
  ingredientTitle: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
  },
  radioTitle: { width: "90%", marginTop: RFPercentage(3) },
  container90: { width: "90%" },
  allergenTitlemain: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
    marginTop: RFPercentage(4),
  },
  radioButtonInner: {
    width: RFPercentage(1.2),
    height: RFPercentage(1.2),
    borderRadius: RFPercentage(3),
    backgroundColor: Colors.stroke,
  },
  circleicon: { marginLeft: RFPercentage(1.3) },
  radioButtonOuter: {
    width: RFPercentage(2),
    height: RFPercentage(2),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.stroke,
    borderRadius: RFPercentage(3),
    alignItems: "center",
    justifyContent: "center",
  },
  radioContainner: {
    width: "90%",
    flexDirection: "row",
    marginTop: RFPercentage(2),
  },
});
