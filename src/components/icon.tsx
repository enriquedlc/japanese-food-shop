import { Image, ImageProps } from "react-native";
import { COLORS } from "../theme/theme";

interface IconProps {
  options: ImageProps | Readonly<ImageProps>;
}

export function Icon(props: IconProps) {
  return (
    <Image
      source={props.options.source}
      style={
        props.options.style ? props.options.style : { width: 24, height: 24 }
      }
      tintColor={
        props.options.tintColor
          ? props.options.tintColor
          : COLORS.primaryLightGreyHex
      }
    />
  );
}
