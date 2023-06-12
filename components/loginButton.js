import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";
import typography from "../theme/typography";

export default LoginButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.albescentWhite,
    width: "302px",
    height: "56px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  buttonText: {
    ...typography.bodyText,
    color: colors.black,
    fontFamily: "Urbanist-Bold",
  },
});
