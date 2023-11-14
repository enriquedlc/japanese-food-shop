import React from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";
import { Icon } from "./icon";

interface IconProps {
  options: ImageProps | Readonly<ImageProps>;
}

export function GradientBGIcon(props: IconProps) {
  const { options } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradient}
      >
        <Icon
          options={{
            source: options.source,
            tintColor: options.tintColor,
            style: options.style,
          }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  linearGradient: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});
