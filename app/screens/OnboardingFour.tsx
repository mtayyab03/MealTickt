import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import SearchField from "../components/SearchField";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const OnboardingFour = ({ navigation }: any) => {
  const avoidFoods = [
    { id: 1, name: "apples" },
    { id: 2, name: "apricots" },
    { id: 3, name: "avocado" },
    { id: 4, name: "almonds" },
    { id: 5, name: "asparagus" },
    { id: 6, name: "artichokes" },
    { id: 7, name: "arugula" },
    { id: 8, name: "anchovies" },
    { id: 9, name: "acorn squash" },
    { id: 10, name: "almond butter" },
    { id: 11, name: "all purpose flour" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(avoidFoods);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredFoods(avoidFoods); // Reset list when query is empty
    } else {
      const filtered = avoidFoods.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredFoods(filtered);
    }
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={icons.mealticktlogo} />
        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingThree")}
          activeOpacity={0.7}
        >
          <AntDesign name="closecircleo" size={20} color={Colors.blacky} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <Text style={styles.stepText}>step 4/5</Text>

      <Text style={styles.title}>next to last question</Text>

      <View style={styles.textContainer}>
        <Text style={styles.avoidText}>any foods you'd like to avoid?</Text>
      </View>

      {/* search field */}
      <SearchField
        title="start typing or select from the list below"
        icon="search"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Avoid Foods List */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollStyle}
      >
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <View key={item.id}>
              <Text style={styles.foodText}>{item.name}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No results found</Text>
        )}
      </ScrollView>

      {/* button */}
      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="next" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </Screen>
  );
};

export default OnboardingFour;
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
  },
  logoContainer: {
    width: "90%",
    marginTop: RFPercentage(1),
    flexDirection: "row",
    justifyContent: "space-between",
  },
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

  foodText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.8),
    color: Colors.black50,
    marginTop: RFPercentage(1.5),
  },
  noResultsText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
    textAlign: "center",
    marginTop: RFPercentage(2),
  },
  avoidText: {
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.7),
    color: Colors.black50,
    marginTop: RFPercentage(4),
  },
  scrollStyle: { width: "90%", flexGrow: 0, height: RFPercentage(45) },
});
