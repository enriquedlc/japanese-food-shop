import { ImageProps, StyleSheet, View } from "react-native";
import { Icon } from "./icon";

interface BackGroundIconProps {
  name: ImageProps["source"];
  color: string;
  size: number;
  backgroundColor: string;
}

export function BackGroundIcon(props: BackGroundIconProps) {
  const { backgroundColor, color, name, size } = props;

  return (
    <View style={[styles.iconBackground, { backgroundColor: backgroundColor }]}>
      <Icon
        options={{
          source: name,
          tintColor: color,
          style: {
            width: size,
            height: size,
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
