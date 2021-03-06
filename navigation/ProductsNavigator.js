import React from "react";
import MainScreen, {
  screenOptions as MainScreenOptions
} from "../screens/shop/MainScreen";
import ProductDetailScreen, {
  screenOptions as productDetailScreenOptions
} from "../screens/shop/ProductDetailScreen";
import CartScreen, {
  screenOptions as cartScreenOptions
} from "../screens/shop/CartScreen";
import CategoryScreen, {
  screenOptions as categoryScreenOptions
} from "../screens/shop/CategoryScreen.js";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const Stack = createStackNavigator();
const ProductsNavigator = props => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={MainScreen}
        options={MainScreenOptions}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryScreen}
        options={categoryScreenOptions}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
