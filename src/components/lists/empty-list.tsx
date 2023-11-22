import { Dimensions, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/theme";

export function EmptyList({ text }: { text: string }) {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.noFoodFoundText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noFoodFoundText: {
    fontSize: 16,
    fontFamily: "poppins-medium",
    color: COLORS.secondaryLightGreyHex,
    alignSelf: "center",
  },
  emptyListContainer: {
    width: Dimensions.get("window").width - 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
