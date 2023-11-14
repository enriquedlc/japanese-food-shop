import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SPACING } from "../theme/theme";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTextStyles}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTextStyles: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "#fff",
  },
});
