import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components/icon";
import { CartScreen } from "../screens/cart-screen";
import { FavoriteScreen } from "../screens/favorite-screen";
import { HomeScreen } from "../screens/home-screen";
import { OrderHistoryScreen } from "../screens/order-history-screen";

import { TAB_BAR_ICONS } from "../../assets/tab-bar";
import { COLORS } from "../theme/theme";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView intensity={15} style={styles.blurViewStyles} />
        ),
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              options={{
                source: TAB_BAR_ICONS.HOME_FILLED,
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              options={{
                source: TAB_BAR_ICONS.HEART_FILLED,
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              options={{
                source: TAB_BAR_ICONS.BAG_FILLED,
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              options={{
                source: TAB_BAR_ICONS.BELL_FILLED,
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  blurViewStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
