import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigator } from "./src/navigators/tab-navigator";
import { DetailsScreen } from "./src/screens/details-screen";
import { PaymentScreen } from "./src/screens/payment-screen";

import { useAppFonts } from "./src/hooks/use-app-fonts";

const Stack = createNativeStackNavigator();

export default function App() {
  const { fontsLoaded } = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
