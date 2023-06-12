import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import colors from "../theme/colors";
import typography from "../theme/typography";
import { Image } from "expo-image";

const LoginScreen = ({ navigation }) => {
  const handleGoogleSignIn = () => {
    // for now, just navigate to the CreationEspace screen
    navigation.navigate("CreationEspace");
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
    navigation.navigate("CreationEspace");
  };

  const handleAppleSignIn = () => {
    // Implement Apple sign-in logic here
    navigation.navigate("CreationEspace");
  };

  const handleRegister = () => {
    // Navigate to the Register screen
    navigation.navigate("CreationEspace");
  };

  const handleAlreadyHaveAccount = () => {
    // Navigate to the existing account login screen
    navigation.navigate("CreationEspace");
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>
          Bienvenue {"\n"}
          chez <Text style={styles.header2}>COPA</Text>
        </Text>
        <Text style={styles.bodyText}>
          L'application qui vous permet d'optimiser et consultez vos plantations
          !
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleGoogleSignIn}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>
              <Image
                source={require("../assets/icons/google.png")}
                style={{ width: 20, height: 20 }}
              />
              {"   "}
              Continuez avec Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFacebookSignIn}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>
              <Image
                source={require("../assets/icons/facebook.png")}
                style={{ width: 20, height: 20 }}
              />
              {"   "}
              Continuez avec Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAppleSignIn}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>
              <Image
                source={require("../assets/icons/apple.png")}
                style={{ width: 20, height: 20 }}
              />
              {"   "}
              Continuez avec Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            activeOpacity={0.7}
          >
            <Text style={styles.registerButtonText}>S'inscrire</Text>
          </TouchableOpacity>
          {/* white line */}
          <View
            style={{
              borderBottomColor: colors.white,
              borderBottomWidth: 1,
              width: 220,
              marginVertical: 10,
            }}
          />
          <TouchableOpacity
            style={styles.alreadyHaveAccountButton}
            onPress={handleAlreadyHaveAccount}
            activeOpacity={0.7}
          >
            <Text style={styles.alreadyHaveAccountText}>
              J'ai déjà un compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header: {
    ...typography.header1,
    textAlign: "center",
    color: colors.albescentWhite,
    marginBottom: 20,
    // fixed to the top
    position: "absolute",
    top: 144,
  },
  header2: {
    ...typography.header1,
    color: colors.lightMossGreen,
  },
  bodyText: {
    ...typography.bodyText,
    textAlign: "center",
    color: colors.albescentWhite,
    // fixed to the top
    position: "absolute",
    top: 274,
  },
  button: {
    backgroundColor: colors.albescentWhite,
    width: 302,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    ...typography.bodyText,
    color: colors.black,
    fontFamily: "Urbanist-Bold",
  },
  buttonContainer: {
    position: "absolute",
    top: 414,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.pineCone,
    width: 302,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    ...typography.bodyText,
    color: colors.albescentWhite,
    fontFamily: "Urbanist-Bold",
  },
  alreadyHaveAccountButton: {
    backgroundColor: colors.albescentWhite,
    width: 302,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderColor: colors.pineCone,
    borderWidth: 2,
  },
  alreadyHaveAccountText: {
    ...typography.bodyText,
    color: colors.pineCone,
    fontFamily: "Urbanist-Bold",
  },
});

export default LoginScreen;
