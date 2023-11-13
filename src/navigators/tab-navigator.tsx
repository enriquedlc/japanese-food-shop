import { StyleSheet, Text, View } from "react-native";

import  {createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/home-screen";
import { FavoriteScreen } from "../screens/favorite-screen";
import { OrderHistoryScreen } from "../screens/order-history-screen";
import { CartScreen } from "../screens/cart-screen";
import { COLORS } from "../theme/theme";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard: true, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle, tabBarBackground: () => <BlurView  intensity={15} style={styles.blurViewStyles} />}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
            <Text style={{color: focused ? COLORS.primaryBlackHex : COLORS.primaryLightGreyHex, fontSize: 12}}>HOME</Text>
          </View>
        )
      }} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
    </Tab.Navigator>
  )
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
    bottom: 0
  },
});
