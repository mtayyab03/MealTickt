import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function LoginScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);

  const [loading, setLoading] = useState(false); // Add loading state

  // Validation schema for email and password
  let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one digit")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one symbol")
      .label("Password"),
  });

  // Handle login function
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;

      // Simulate API call (you can integrate your real API here)
      setTimeout(() => {
        setLoading(false);
        // Navigate to BottomTab screen on success
        props.navigation.navigate("HomeScreen");
      }, 2000);
    } catch (error) {
      setLoading(false);
      Alert.alert("Login Failed", "Please check your email and password.");
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.logocontainer}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(3.5),
            color: Colors.white,
          }}
        >
          App Logo
        </Text>
      </View>

      {/* login text */}
      <View style={{ width: "90%", marginTop: RFPercentage(8) }}>
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.4),
          }}
        >
          Login
        </Text>
      </View>

      {/* //email input */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <View style={styles.inputmaincontainer}>
              <View style={styles.emailmain}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  autoCapitalize="none"
                  // value={text}
                  placeholder="Email Address"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              {touched.email && errors.email && (
                <View style={{ width: "90%" }}>
                  <Text style={styles.error}>{errors.email}</Text>
                </View>
              )}
              <View style={{ marginTop: RFPercentage(2) }} />
              <View style={styles.emailmain}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  // value={Password}
                  placeholder="Password"
                  placeholderTextColor={Colors.placeholder}
                  secureTextEntry={true && !eyeIcon}
                />

                <TouchableOpacity
                  onPress={() => setEyeIcon(!eyeIcon)}
                  activeOpacity={0.7}
                  style={styles.eyeicon}
                >
                  <MaterialCommunityIcons
                    color={Colors.lightWhite}
                    style={{ right: RFPercentage(1) }}
                    size={RFPercentage(3)}
                    name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <View style={{ width: "90%" }}>
                  <Text style={styles.error}>{errors.password}</Text>
                </View>
              )}

              {/* forget password */}
              <View style={{ width: "100%" }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.forgotPasswordButton}
                >
                  <Text style={styles.forgotPasswordText}>
                    Forget Password ?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.loginbutton}
              activeOpacity={0.7}
              onPress={handleSubmit} // Submit form
            >
              <View
                style={{
                  width: "90%",
                  height: RFPercentage(6.5),
                  borderRadius: RFPercentage(1),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(2),
                  backgroundColor: Colors.primary,
                }}
              >
                {loading ? (
                  <ActivityIndicator color={Colors.white} size={22} />
                ) : (
                  <Text style={styles.buttontext}>Login</Text>
                )}
              </View>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(3),
        }}
      >
        <View
          style={{
            width: "46%",
            marginTop: RFPercentage(1),
            height: RFPercentage(0.06),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(0.5),
          }}
        />
        <View
          style={{
            width: "8%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(1.5),
            }}
          >
            or
          </Text>
        </View>

        <View
          style={{
            width: "46%",

            marginTop: RFPercentage(1),
            height: RFPercentage(0.06),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(0.5),
          }}
        />
      </View>
      {/* authetication by google apple fb */}
      <View style={styles.appfbgcontainer}>
        <Image style={styles.fbglogo} source={icons.googlelogo} />
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.8),
          }}
        >
          Sign in with Google
        </Text>
      </View>
      <View style={[styles.appfbgcontainer, { paddingLeft: RFPercentage(2) }]}>
        <Image style={styles.fbglogo} source={icons.appleg} />
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.8),
          }}
        >
          Sign in with Apple ID
        </Text>
      </View>

      {/* Signup */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          flex: 1,
          marginBottom: RFPercentage(3),
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.5),
          }}
        >
          Don’t have an account ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignupScreen");
          }}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: Colors.primary,
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(1.5),
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.blacky,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(7),
  },
  logo: {
    width: RFPercentage(15),
    height: RFPercentage(15),
  },
  inputmaincontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  emailmain: {
    width: "90%",
    height: RFPercentage(7),
    backgroundColor: Colors.ligthBlack,
    color: Colors.blacky,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
  },
  input: { fontFamily: FontFamily.regular, color: Colors.lightWhite },

  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },

  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(4),
  },
  appfbgcontainer: {
    width: "90%",
    paddingVertical: RFPercentage(1.5),
    marginVertical: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.lightWhite,
    borderRadius: RFPercentage(1),
    flexDirection: "row",
  },
  socialmain: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(3),
  },
  fbglogo: {
    width: RFPercentage(3),
    height: RFPercentage(3),
    marginRight: RFPercentage(1.5),
  },

  forgotPasswordButton: {
    marginTop: RFPercentage(1),
    position: "absolute",
    right: RFPercentage(2),
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.4),
  },
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(1.8),
    fontFamily: FontFamily.semiBold,
  },
});
