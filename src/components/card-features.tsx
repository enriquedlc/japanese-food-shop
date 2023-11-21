import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BackGroundIcon } from "./background-icon";

import { ICONS } from "../../assets";
import { COLORS } from "../theme/theme";

const CARD_WIDTH = Dimensions.get("window").width * 0.3;

interface CardFeaturesProps {
  name: string;
  specialIngredient: string;
  price: string;
}

export function CardFeatures(props: CardFeaturesProps) {
  const { name, price, specialIngredient } = props;

  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
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
