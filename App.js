import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./theme/colors";
import typography from "./theme/typography";
import { useFonts } from "expo-font";

// Import your LoginScreen component
import LoginScreen from "./pages/LoginScreen";
import CreationEspaceScreen from "./pages/CreationEspace";

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
  const [fontsLoaded] = useFonts({
    Urbanist: require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreationEspace" component={CreationEspaceScreen} />
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
