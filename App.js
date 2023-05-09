import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./theme/colors";
import typography from "./theme/typography";

// Import your LoginScreen component
import LoginScreen from "./pages/LoginScreen";

const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 1500); // Change the delay in milliseconds as needed (3000ms = 3 seconds)

    // Cleanup function to clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/favicon.png")} style={styles.image} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pineCone,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 196,
    height: 233,
    resizeMode: "contain", // set the image resizing mode
  },
});
