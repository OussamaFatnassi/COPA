import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../theme/colors";
import typography from "../theme/typography";

const LoginScreen = () => {
  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
  };

  const handleAppleSignIn = () => {
    // Implement Apple sign-in logic here
  };

  const handleRegister = () => {
    // Navigate to the Register screen
  };

  const handleAlreadyHaveAccount = () => {
    // Navigate to the existing account login screen
  };

  return (
    <View style={styles.container}>
      <Text style={typography.header1}>Welcome</Text>
      <Text style={typography.bodyText}>
        Please sign in or register to continue.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Icon name="google" size={20} color={colors.white} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFacebookSignIn}>
        <Icon name="facebook" size={20} color={colors.white} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAppleSignIn}>
        <Icon name="apple" size={20} color={colors.white} />
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAlreadyHaveAccount}>
        <Text style={styles.alreadyHaveAccountText}>
          I already have an account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 16,
  },
  alreadyHaveAccountText: {
    marginTop: 20,
    color: colors.gray,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
