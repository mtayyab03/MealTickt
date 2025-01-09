import React, { useState, useEffect } from "react";
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

const OnboardingThree = ({ navigation }) => {
  const [menuid, setmenuid] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const selectIngredient = [
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
  const allergens = [
    "milk",
    "eggs",
    "fish",
    "crustacean",
    "nuts",
    "wheat",
    "soyabeans",
    "none",
  ];

  const daysSelection = [
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

  // State to track selected allergens
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  // Toggle selection of allergen
  const handleSelection = (allergen) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens((prev) => prev.filter((item) => item !== allergen)); // Remove from selection
    } else {
      setSelectedAllergens((prev) => [...prev, allergen]); // Add to selection
    }
  };

  // Toggle selection of a day
  const handleDaySelection = (dayId) => {
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

      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.7),
            color: Colors.black50,
            marginTop: RFPercentage(4),
          }}
        >
          any allergies we should know about
        </Text>
      </View>

      {/* allergic selection */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          flexWrap: "wrap",
          marginTop: RFPercentage(1),
        }}
      >
        {allergens.map((allergen, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => handleSelection(allergen)}
            style={{
              paddingHorizontal: RFPercentage(3),
              paddingVertical: RFPercentage(1.5),
              alignItems: "center",
              justifyContent: "center",
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.stroke,
              marginTop: RFPercentage(1.5),
              borderRadius: RFPercentage(3),
              flexDirection: "row",
              marginRight: RFPercentage(1.5),
              backgroundColor: selectedAllergens.includes(allergen)
                ? Colors.mildyellow
                : "transparent", // Change background color
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
                color: Colors.black50,
              }}
            >
              {allergen}
            </Text>
            {selectedAllergens.includes(allergen) && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelection(allergen)}
              >
                <AntDesign
                  style={{ marginLeft: RFPercentage(1.3) }}
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

      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.7),
            color: Colors.black50,
          }}
        >
          ingredient measurement
        </Text>

        {/* Gender */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(2),
          }}
        >
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
              <View
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                  borderWidth: RFPercentage(0.2),
                  borderColor: Colors.stroke,
                  borderRadius: RFPercentage(3),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {menuid === item.id ? (
                  <View
                    style={{
                      width: RFPercentage(1.2),
                      height: RFPercentage(1.2),
                      borderRadius: RFPercentage(3),
                      backgroundColor: Colors.stroke,
                    }}
                  />
                ) : null}
              </View>
              <Text
                style={{
                  marginLeft: RFPercentage(0.5),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.5),
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(4),
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.7),
            color: Colors.black50,
          }}
        >
          do you want to skip any diet any days?
        </Text>

        <Feather name="alert-circle" size={24} color={Colors.blacky} />
      </View>

      {/* Days Selection */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          marginTop: RFPercentage(1.5),
        }}
      >
        {daysSelection.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => handleDaySelection(item.id)}
            style={{
              width: RFPercentage(5.3),
              height: RFPercentage(6),
              alignItems: "center",
              justifyContent: "center",
              borderWidth: RFPercentage(0.1),
              borderColor: Colors.stroke,
              borderRadius: RFPercentage(1),
              flexDirection: "row",
              marginRight: RFPercentage(0.8),
              backgroundColor: selectedDays.includes(item.id)
                ? Colors.mildyellow
                : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.regular,
                fontSize: RFPercentage(1.5),
                color: Colors.black50,
              }}
            >
              {item.name}
            </Text>
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
    fontSize: RFPercentage(2.5),
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
});
