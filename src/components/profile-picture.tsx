import { Image, StyleSheet, View } from "react-native";
import { COLORS, SPACING } from "../theme/theme";

export function ProfilePicture() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/profile-picture.jpg")}
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
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});
