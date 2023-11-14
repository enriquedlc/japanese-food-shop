import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { ICONS } from "../../assets";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import { Icon } from "./icon";

interface FoodListSearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export function FoodListSearchBar(props: FoodListSearchBarProps) {
  const { searchText, setSearchText } = props;

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity>
        <Icon
          options={{
            source: ICONS.SEARCH_ICON,
            tintColor:
              searchText.length > 0
                ? COLORS.primaryOrangeHex
                : COLORS.primaryLightGreyHex,
            style: {
              marginHorizontal: SPACING.space_20,
              width: 24,
              height: 24,
            },
          }}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="find what you like..."
        value={searchText}
        onChange={(e) => setSearchText(e.nativeEvent.text)}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: SPACING.space_20 * 3,
    width: "100%",
    fontFamily: "poppins-medium",
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
