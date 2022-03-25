import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/Home";
import { CarDetailsScreen } from "../screens/CarDetails";
import { SchedulingScreen } from "../screens/Scheduling";
import { SchedulingDetailsScreen } from "../screens/SchedulingDetails";
import { SchedulingCompleteScreen } from "../screens/SchedulingComplete";
import { RootStackParamList } from "./@types/navigation";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="CarDetails" component={CarDetailsScreen} />
      <Screen name="Scheduling" component={SchedulingScreen} />
      <Screen name="SchedulingDetails" component={SchedulingDetailsScreen} />
      <Screen name="SchedulingComplete" component={SchedulingCompleteScreen} />
    </Navigator>
  );
}
