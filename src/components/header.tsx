import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MENU } from "../../assets/menu";
import { COLORS, SPACING } from "../theme/theme";
import { GradientBgIcon } from "./gradient-bg-icon";
import { ProfilePicture } from "./profile-picture";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <View style={styles.headerContainer}>
      <GradientBgIcon
        options={{
          tintColor: COLORS.primaryLightGreyHex,
          source: MENU.menuIcon,
        }}
      />
      <Text style={styles.headerTextStyles}>{title}</Text>
      <ProfilePicture />
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
