import { StyleSheet, Text, View } from "react-native";

import { Icon } from "./icon";

import { DRINKS, FOOD, ICONS } from "../../assets";
import { COLORS } from "../theme/theme";

interface ItemCharacteristicsProps {
  name: string;
  specialIngredient: string;
  type: string;
  averageRating: number;
  ratingCount: number;
}

export function ItemCharacteristics(props: ItemCharacteristicsProps) {
  const { name, specialIngredient, type, averageRating, ratingCount } = props;

  return (
    <View style={styles.imageInfoOuterContainer}>
      <View style={styles.imageInfoInnerContainer}>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.itemTitleText}>{name}</Text>
            <Text style={styles.itemSubtitleText}>{specialIngredient}</Text>
          </View>
          <View style={styles.itemPropertiesContainer}>
            <View style={styles.propertiesFirst}>
              <Icon
                options={{
                  source: type === "food" ? FOOD.FOOD_TOOLS : DRINKS.DRINK,
                  tintColor: COLORS.primaryOrangeHex,
                }}
              />
              <Text style={styles.firstTextProperty}>{type}</Text>
            </View>
            <View style={styles.propertiesFirst}>
              <Icon
                options={{
                  source: ICONS.STARS_RATE,
                  tintColor: COLORS.primaryOrangeHex,
                }}
              />
              <Text style={styles.firstTextProperty}>
                {averageRating} ({ratingCount})
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageInfoOuterContainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    fontFamily: "poppins",
  },
  imageInfoInnerContainer: {
    justifyContent: "space-between",
    gap: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  itemTitleText: {
    fontFamily: "poppins-semibold",
    fontSize: 24,
    color: COLORS.primaryWhiteHex,
  },
  itemSubtitleText: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: COLORS.primaryWhiteHex,
  },
  propertiesFirst: {
    height: 55,
    width: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  firstTextProperty: {
    fontFamily: "poppins-medium",
    fontSize: 10,
    color: COLORS.primaryWhiteHex,
  },
});
