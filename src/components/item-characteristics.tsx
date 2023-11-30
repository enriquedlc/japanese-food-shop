import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";

import { Icon } from "./icon";

import { DRINKS, FOOD, ICONS } from "../../assets";
import { COLORS } from "../theme/theme";

interface ItemCharacteristicsProps {
  name: string;
  specialIngredient: string;
  type: string;
  averageRating: number;
  ratingCount: number;
  category: string;
  servingTemperature: string;
  servingTemperatureIcon: ImageSourcePropType;
}

export function ItemCharacteristics(props: ItemCharacteristicsProps) {
  const {
    name,
    specialIngredient,
    type,
    averageRating,
    ratingCount,
    category,
    servingTemperature,
    servingTemperatureIcon,
  } = props;

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
                  source: servingTemperatureIcon,
                  tintColor: COLORS.primaryOrangeHex,
                  style: { width: 20, height: 20, marginBottom: 4 },
                }}
              />
              <Text style={styles.firstTextProperty}>{servingTemperature}</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <Icon
              options={{
                source: ICONS.STARS_RATE,
                tintColor: COLORS.primaryOrangeHex,
              }}
            />
            <Text style={styles.ratingText}>{averageRating}</Text>
            <Text style={styles.ratingCountText}>({ratingCount})</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{category}</Text>
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
    fontSize: 22,
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
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "poppins-semibold",
    fontSize: 17,
    color: COLORS.primaryWhiteHex,
  },
  ratingCountText: {
    fontFamily: "poppins",
    fontSize: 12,
    color: COLORS.primaryWhiteHex,
  },
  categoryContainer: {
    height: 55,
    width: 55 * 2 + 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  categoryText: {
    fontFamily: "poppins",
    fontSize: 12,
    color: COLORS.primaryWhiteHex,
  },
});
