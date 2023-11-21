import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ICONS } from "../../assets";
import { COLORS } from "../theme/theme";
import { BackGroundIcon } from "./background-icon";
import { FoodItemCardImage } from "./food-item-card-image";
import { Icon } from "./icon";

const CARD_WIDTH = Dimensions.get("window").width * 0.3;

interface FoodItemCardProps {
  id: string;
  index: number;
  name: string;
  type: string;
  image: ImageProps["source"];
  specialIngredient: string;
  averageRating: number;
  price: string;
  onPress: () => void;
}

export function FoodItemCard(props: FoodItemCardProps) {
  const {
    name,
    averageRating,
    id,
    image,
    index,
    onPress,
    price,
    specialIngredient,
    type,
  } = props;

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearCardGradient}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <FoodItemCardImage image={image}>
        {/*  */}
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
        {/*  */}
      </FoodItemCardImage>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubTitle}>{specialIngredient}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPriceCurrency}>
          <Text style={styles.cardPrice}>{price}</Text> €
        </Text>
        <TouchableOpacity>
          <BackGroundIcon
            backgroundColor={COLORS.primaryOrangeHex}
            color={COLORS.primaryWhiteHex}
            size={12}
            name={ICONS.PLUS}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearCardGradient: {
    borderRadius: 25,
    padding: 15,
  },

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
  cardTitle: {
    fontFamily: "poppins-medium",
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    width: CARD_WIDTH,
  },
  cardSubTitle: {
    fontFamily: "poppins-light",
    color: COLORS.primaryWhiteHex,
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  cardPriceCurrency: {
    fontFamily: "poppins-semibold",
    color: COLORS.primaryOrangeHex,
    fontSize: 16,
  },
  cardPrice: {
    fontFamily: "poppins-semibold",
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    lineHeight: 22,
  },
});
