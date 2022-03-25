import React from "react";
import { StatusBar, Button } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import { RootStackParamList } from "../../routes/@types/navigation";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen(props: HomeScreenProps) {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  function handleNavigate(where: string) {}

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Button
        title="Do Something"
        onPress={() => props.navigation.navigate("CarDetails")}
      />
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => {
          return (
            <Car
              data={carData}
              onPress={() => props.navigation.navigate("CarDetails")}
            />
          );
        }}
      />
    </Container>
  );
}
