import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  Modal,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Ionicons,
  AntDesign,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const handleCategorySelect = (item) => {
    setSelectedCategory(item);
    setIsCategoryModalVisible(false); // Close the modal after selecting
  };

  const categories = ["Raw Material", "Machine"];

  const cards = [
    {
      id: 1,
      mediaSource: icons.gold,
      mediaType: "image", // Specify media type
      name: "Darrel Halland",
      profile: icons.profile4,
      title: "Gold Raw Material",
      price: "250$",
      category: "Raw Material",
      subCategory: "Leather",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra nunc vitae tellus dapibus, nec aliquam nisl sollicitudin.Curabitur sit amet justo lorem.",
    },
    {
      id: 2,
      mediaSource: icons.rice,
      mediaType: "image", // Specify media type
      name: "Nicolas Kimmer",
      profile: icons.profile1,
      title: "Rice Raw Material",
      category: "machine",
      subCategory: "Fabric",
      price: "250$",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra nunc vitae tellus dapibus, nec aliquam nisl sollicitudin.Curabitur sit amet justo lorem.",
    },
  ];
  const filteredCards =
    selectedCategory === "Select Category"
      ? cards
      : cards.filter(
          (card) =>
            card.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const clearFilters = () => {
    setSelectedCategory("Select Category"); // Reset to default
  };

  return (
    <Screen style={styles.screen}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.2),
            color: Colors.white,
          }}
        >
          App Logo
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("NewPostScreen")}
          activeOpacity={0.7}
          style={{
            paddingVertical: RFPercentage(1),
            paddingHorizontal: RFPercentage(2),
            borderRadius: RFPercentage(0.7),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.primary,
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
              color: Colors.white,
            }}
          >
            New Post
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          marginVertical: RFPercentage(1.5),
          height: RFPercentage(0.06),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(0.5),
        }}
      />

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: RFPercentage(1),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsCategoryModalVisible(true); // Set to true for categories
          }}
          activeOpacity={0.7}
          style={{
            width: "75%",
            height: RFPercentage(6),
            borderRadius: RFPercentage(0.7),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.primary,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2),
              color: Colors.white,
            }}
          >
            {selectedCategory}
          </Text>
          <MaterialIcons
            color={Colors.white}
            size={28}
            name="keyboard-arrow-down"
          />
        </TouchableOpacity>

        {/* clear button */}
        <TouchableOpacity
          onPress={clearFilters}
          activeOpacity={0.7}
          style={{
            height: RFPercentage(6),
            width: "20%",
            borderRadius: RFPercentage(0.7),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.ligthBlack,
            borderWidth: 1,
            borderColor: Colors.lightWhite,
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
              color: Colors.white,
            }}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>
      {/* insta card */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(3),
          marginTop: RFPercentage(2),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {filteredCards.map((item, i) => (
          <View
            key={i}
            style={{
              width: "98%",
              marginBottom: RFPercentage(4),
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "92%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: RFPercentage(1),
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                    borderRadius: RFPercentage(3),
                  }}
                  source={item.profile}
                />

                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(1.5),
                    color: Colors.white,
                    marginLeft: RFPercentage(1.5),
                  }}
                >
                  {item.name}
                </Text>
              </View>

              <Entypo
                name="dots-three-horizontal"
                color={Colors.lightWhite}
                size={18}
              />
            </View>

            {/* image */}
            <Image
              style={{
                width: "100%",
                height: RFPercentage(42),
              }}
              source={item.mediaSource}
            />

            {/* like comment section */}
            <View
              style={{
                width: "92%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: RFPercentage(1),
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleLikeToggle(item.id)} // Trigger like toggle for this card
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.semiBold,
                      fontSize: RFPercentage(1.8),
                      color: Colors.white,
                      marginTop: RFPercentage(1.3),
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      fontFamily: FontFamily.regular,
                      fontSize: RFPercentage(1.3),
                      color: Colors.white,
                      marginTop: RFPercentage(1),
                    }}
                  >
                    Price per kg/meter: {item.price}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  paddingVertical: RFPercentage(1),
                  paddingHorizontal: RFPercentage(2.5),
                  borderRadius: RFPercentage(0.7),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(1.5),
                    color: Colors.white,
                  }}
                >
                  Contact
                </Text>
              </TouchableOpacity>
            </View>

            {/* caption */}
            <View
              style={{
                width: "92%",
                marginTop: RFPercentage(1.4),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1.2),
                  color: Colors.white,
                }}
              >
                {item.caption}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={isCategoryModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsCategoryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Category</Text>
              <TouchableOpacity
                onPress={() => setIsCategoryModalVisible(false)}
              >
                <MaterialIcons name="close" size={24} color={Colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => handleCategorySelect(item)}
                  >
                    <Text style={styles.categoryItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* modal end */}
    </Screen>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.blacky,
  },

  // modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: Colors.ligthBlack,
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFPercentage(2),
  },
  modalTitle: {
    fontSize: RFPercentage(2.2),
    fontFamily: FontFamily.bold,
    color: Colors.white,
  },

  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFPercentage(1),
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
  categoryItemText: {
    fontSize: RFPercentage(1.7),
    color: Colors.white,
    fontFamily: FontFamily.regular,
  },
});
