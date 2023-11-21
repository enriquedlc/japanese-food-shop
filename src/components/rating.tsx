import { StyleSheet, Text, View } from "react-native";

import { Icon } from "./icon";

import { ICONS } from "../../assets";
import { COLORS } from "../theme/theme";

interface RatingProps {
  averageRating: number;
}

export function Rating(props: RatingProps) {
  const { averageRating } = props;

  return (
    <View style={styles.cardRatingContainer}>
      <Icon
        options={{
          source: ICONS.STAR_FILLED,
          tintColor: COLORS.primaryOrangeHex,
          style: { width: 18, height: 18 },
        }}
      />
      <Text style={styles.cardRatingText}>{averageRating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardRatingContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 15,
    position: "absolute",
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 0,
    right: 0,
  },
  cardRatingText: {
    fontFamily: "poppins-medium",
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    lineHeight: 22,
  },
});
