import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { ICONS } from "../../assets";
import { BORDERRADIUS, COLORS, SPACING } from "../theme/theme";
import { Icon } from "./icon";

interface FoodListSearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
  searchFood: (text: string) => void;
  clearSearch: () => void;
}

export function FoodListSearchBar(props: FoodListSearchBarProps) {
  const { searchText, setSearchText, clearSearch, searchFood } = props;

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => searchFood(searchText)}>
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
        onChangeText={(text) => searchFood(text)}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={clearSearch}>
          <Icon
            options={{
              source: ICONS.CLOSE,
              tintColor: COLORS.primaryLightGreyHex,
              style: {
                marginHorizontal: 15,
                width: 24,
                height: 24,
              },
            }}
          />
        </TouchableOpacity>
      )}
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
    flex: 1,
    height: 20 * 3,
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
  },
});
