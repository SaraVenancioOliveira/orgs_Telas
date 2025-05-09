import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home  from "../telas/Home";
import melhoresProdutores from "../telas/MelhoresProdutores";

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.NavigationContainer>
        <Tab.Screen name='Home' component={Home} />
        <table.Screen name='MelhoresProdutores' component={melhoresProdutores} />
    </Tab.NavigationContainer>
  </NavigationContainer>
}