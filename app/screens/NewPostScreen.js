import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import DoubleField from "../components/DoubleField";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const NewPostScreen = ({ navigation }) => {
  const [caption, setCaption] = useState("");
  const [title, setTitle] = useState("");
  const [purchase, onChangePurchase] = useState("");
  const [expiry, onChangeExpiry] = useState("");
  const [price, onChangePrice] = useState("");
  const [quatity, onChangeQuantity] = useState("");
  const [make, onChangeMake] = useState("");
  const [model, onChangeModel] = useState("");

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [SubCategory, setSubCategory] = useState("Sub Category");
  const [isSubCategoryModalVisible, setisSubCategoryModalVisible] =
    useState(false);
  const [isCategoryModalVisible, setisCategoryModalVisible] = useState(false);

  const categories = ["Raw Material", "Machine"];

  const subcategories = [
    "Electronic",
    "Electrical",
    "Rubber",
    "Glass",
    "Metal parts",
    "Cosumables",
    "Fabrics",
    "Leather",
    "Furiture",
    "Tiles/Stones",
    "Packaging",
    "Official Equipment",
    "Others",
  ];

  // const handleCategorySelect = (item) => {
  //   setSubCategory(item);
  //   setisSubCategoryModalVisible(false); // Close the modal after selecting
  // };
  const handleCategorySelect = (item) => {
    if (!isSubCategoryModalVisible) {
      setSelectedCategory(item);
      setisCategoryModalVisible(false);
    } else {
      setSubCategory(item);
      setisSubCategoryModalVisible(false);
    }
  };

  const pickImageOrVideo = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Allows both images and videos
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedMedia(result.assets[0].uri); // Save the selected image/video URI
      setMediaType(result.assets[0].type); // Set media type
    }
  };
  const handleSubmit = () => {
    if (!selectedMedia || caption.trim() === "") {
      Alert.alert("Please add an image and write a caption.");
      return;
    }

    // If both media and caption are provided, show success alert and go back
    Alert.alert("Success!", "Your post has been submitted successfully.", [
      {
        text: "OK",
        onPress: () => {
          // Clear the caption and selected media
          setCaption("");
          setMediaType("");
          setSelectedMedia(null);
          navigation.goBack(); // Navigate back when OK is pressed
        },
      },
    ]);
  };

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: "center",
            position: "absolute",
            left: 0,
          }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" color={Colors.white} size={24} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.lightWhite,
              fontFamily: FontFamily.semiBold,
            }}
          >
            New Post
          </Text>
        </View>
      </View>

      {/* Upload */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={pickImageOrVideo} // Trigger media picker on press
        style={{
          marginTop: RFPercentage(4),
          alignItems: "center",
          justifyContent: "center",
          width: RFPercentage(17),
          height: RFPercentage(17),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.stroke,
          backgroundColor: Colors.ligthBlack,
          borderRadius: RFPercentage(2),
        }}
      >
        {selectedMedia ? (
          <Image
            source={{ uri: selectedMedia }}
            style={styles.media}
            resizeMode="cover"
          />
        ) : (
          <>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: RFPercentage(2),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(6),
              }}
            >
              <FontAwesome
                color={Colors.ligthBlack}
                size={RFPercentage(3)}
                name="camera"
              />
            </View>
            <Text
              style={{
                marginTop: RFPercentage(1),
                fontSize: RFPercentage(1.2),
                color: Colors.lightWhite,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Upload Image
            </Text>
          </>
        )}
      </TouchableOpacity>

      <View style={{ marginTop: RFPercentage(2) }} />
      <View style={styles.emailmain}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* double modal */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: RFPercentage(1),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setisSubCategoryModalVisible(false); // Set to true for categories
            setisCategoryModalVisible(true);
          }}
          activeOpacity={0.7}
          style={styles.categoryButton}
        >
          <Text style={styles.categoryText}>{selectedCategory}</Text>
          <MaterialIcons
            color={Colors.white}
            size={28}
            name="keyboard-arrow-down"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setisSubCategoryModalVisible(true); // Set to true for categories
            setisCategoryModalVisible(false);
          }}
          activeOpacity={0.7}
          style={styles.categoryButton}
        >
          <Text style={styles.categoryText}>{SubCategory}</Text>
          <MaterialIcons
            color={Colors.white}
            size={28}
            name="keyboard-arrow-down"
          />
        </TouchableOpacity>
      </View>

      <DoubleField
        ftitle="Enter purchase date"
        ltitle="Enter expiry date"
        fvalue={purchase}
        lvalue={expiry}
        onChangeF={onChangePurchase}
        onChangeL={onChangeExpiry}
      />
      <DoubleField
        ftitle="Price per kg/meter"
        ltitle="Enter quantity"
        fvalue={price}
        lvalue={quatity}
        onChangeF={onChangePrice}
        onChangeL={onChangeQuantity}
      />
      <DoubleField
        ftitle="make (optional)"
        ltitle="Model no (optional)"
        fvalue={make}
        lvalue={model}
        onChangeF={onChangeMake}
        onChangeL={onChangeModel}
      />

      {/* caption write */}
      <View style={styles.description}>
        <TextInput
          style={{ color: Colors.lightWhite }}
          placeholder="Write a description"
          placeholderTextColor={Colors.placeholder}
          multiline={true}
          value={caption}
          onChangeText={setCaption} // Update state when text changes
        />
      </View>

      {/* button */}

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.loginbutton}
        activeOpacity={0.8}
      >
        <AppButton title="Submit" buttonColor={Colors.primary} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={
          isCategoryModalVisible
            ? isCategoryModalVisible
            : isSubCategoryModalVisible
        }
        animationType="fade"
        transparent={true}
        onRequestClose={() => setisCategoryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {isCategoryModalVisible
                  ? "Select Category"
                  : "Select Subcategory"}
              </Text>
              <TouchableOpacity
                onPress={
                  isCategoryModalVisible
                    ? () => setisCategoryModalVisible(false)
                    : () => setisSubCategoryModalVisible(false)
                }
              >
                <MaterialIcons name="close" size={24} color={Colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <FlatList
                data={isCategoryModalVisible ? categories : subcategories}
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
    </Screen>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.blacky,
  },
  img: {
    width: RFPercentage(9),
    height: RFPercentage(9),
    borderRadius: RFPercentage(5),
  },
  description: {
    width: "90%",
    height: RFPercentage(12),
    borderRadius: RFPercentage(1),
    backgroundColor: Colors.ligthBlack,
    paddingHorizontal: RFPercentage(1.5),
    paddingVertical: RFPercentage(1),
    marginTop: RFPercentage(1),
  },
  input: { fontFamily: FontFamily.regular, color: Colors.lightWhite },
  categoryButton: {
    width: "47%",
    height: RFPercentage(6),
    backgroundColor: Colors.ligthBlack,
    borderRadius: RFPercentage(0.7),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  categoryText: {
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(1.5),
    color: Colors.white,
  },
  mediaPicker: {
    marginTop: RFPercentage(4),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(20),
    height: RFPercentage(20),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.stroke,
    backgroundColor: Colors.ligthBlack,
    borderRadius: RFPercentage(3),
  },
  media: {
    width: "100%",
    height: "100%",
    borderRadius: RFPercentage(2),
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  emailmain: {
    width: "90%",
    height: RFPercentage(6),
    backgroundColor: Colors.ligthBlack,
    color: Colors.white,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
    marginTop: RFPercentage(1),
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
