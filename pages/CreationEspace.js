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
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
const CreationEspaceScreen = ({ navigation }) => {
  const goToIndex = () => {
    navigation.navigate("Index");
  };
  const goToCreationEspace = () => {
    navigation.navigate("CreationEspace");
  };
  const goToCultures = () => {
    navigation.navigate("Cultures");
  };
  const goToInentaire = () => {
    navigation.navigate("Inentaire");
  };
  const goToRecolte = () => {
    navigation.navigate("Recolte");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mes Espaces</Text>
      <View style={styles.centerContainer}>
        <Text style={styles.bodyText}>
          Pas encore d'espaces de cultures ?{"\n"}
          Il est temps d'en créer un !
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={goToCreationEspace}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Créer un espace de culture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fixedFooter}>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={goToIndex}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonFooterText}>
            <Ionicons name="home" size={24} color="black" />
            Accueil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={goToCreationEspace}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonFooterText}>
            <MaterialIcons name="fence" size={24} color="black" />
            Espaces
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={goToCultures}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonFooterText}>
            <MaterialCommunityIcons name="sprout" size={24} color="black" />
            Cultures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={goToInentaire}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonFooterText}>
            <Octicons name="checklist" size={24} color="black" />
            Inventaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={goToRecolte}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonFooterText}>
            <MaterialCommunityIcons
              name="fruit-cherries"
              size={24}
              color="black"
            />
            Récolte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.albescentWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Urbanist-Bold",
    fontSize: 24,
    color: colors.black,
    position: "absolute",
    top: 60,
    left: 30,
  },

  bodyText: {
    ...typography.bodyText,
    textAlign: "center",
    color: colors.black,
    fontSize: 14,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.pineCone,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: 214,
    height: 40,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.albescentWhite,
    marginLeft: 10,
    fontSize: 13,
    fontFamily: "Urbanist",
  },
  fixedFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: colors.pineCone,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonFooter: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  buttonFooterText: {
    color: colors.albescentWhite,
    marginLeft: 10,
    fontSize: 10,
    fontFamily: "Urbanist",
  },
});
export default CreationEspaceScreen;
