import { Image, StyleSheet, View } from "react-native";

import { COLORS, SPACING } from "../theme/theme";

export function ProfilePicture() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/profile-image/user-circle.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: SPACING.space_36,
    height: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
    tintColor: COLORS.primaryLightGreyHex,
  },
});
